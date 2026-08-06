from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent / 'src'
if not root.exists():
    raise SystemExit('src directory not found')

for p in sorted(root.rglob('*.js')) + sorted(root.rglob('*.jsx')):
    text = p.read_text(encoding='utf-8')
    prefix = ''
    if text.startswith('\ufeff'):
        prefix = '\ufeff'
        text = text[1:]

    stripped = text.lstrip('\r\n')
    leading_ws = text[: len(text) - len(stripped)]
    if stripped.startswith('/*'):
        end = stripped.find('*/')
        if end != -1:
            header = stripped[: end + 2]
            rest = stripped[end + 2 :]
            lines = header.splitlines()
            new_lines = []
            has_description = False
            for line in lines:
                if 'Archivo:' in line:
                    continue
                if 'Descripción:' in line:
                    has_description = True
                new_lines.append(line)

            if not has_description:
                # preserve opening comment and insert description
                if new_lines and new_lines[0].strip() == '/*':
                    new_lines.insert(1, '  Descripción: Archivo fuente del proyecto.')
                else:
                    new_lines = ['/*', '  Descripción: Archivo fuente del proyecto.', '*/']

            new_header = '\n'.join(new_lines)
            new_text = prefix + leading_ws + new_header + rest
            p.write_text(new_text, encoding='utf-8')
            continue

    # No top header block found, add a generic one
    new_header = '/*\n  Descripción: Archivo fuente del proyecto.\n*/\n'
    new_text = prefix + leading_ws + new_header + stripped
    p.write_text(new_text, encoding='utf-8')
