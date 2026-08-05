from pathlib import Path
import re

root = Path('src')
wrapper_paths = []
for path in root.rglob('index.*'):
    if path.name not in ('index.js', 'index.jsx'):
        continue
    text = path.read_text(encoding='utf-8').strip()
    m = re.match(r'^export \{ default \} from ["\']\.\/([^"\']+)["\'];?$', text)
    if not m:
        continue
    target_name = m.group(1)
    candidate_js = path.parent / f'{target_name}.js'
    candidate_jsx = path.parent / f'{target_name}.jsx'
    if candidate_js.exists() or candidate_jsx.exists():
        wrapper_paths.append((path, target_name))

if not wrapper_paths:
    print('No wrapper re-exports found.')
    raise SystemExit(0)

print('Found wrappers:')
for path, target in wrapper_paths:
    print(path.as_posix(), '->', target)

# Find files containing imports to these folders
files = [p for p in root.rglob('*') if p.suffix in {'.js', '.jsx'}]
changes = []

for file_path in files:
    text = file_path.read_text(encoding='utf-8')
    new_text = text
    for wrapper_path, target_name in wrapper_paths:
        folder = wrapper_path.parent
        # compute import path from file to wrapper folder
        rel = file_path.parent.relative_to(Path.cwd()).joinpath(folder).as_posix()
    
print('Wrapper processing ready.')
