from pathlib import Path

root = Path(".")
source = root / "src"

# Ensure App.js imports GlobalStyles and renders it
app_file = source / "App.js"
if app_file.exists():
    text = app_file.read_text(encoding="utf-8")
    if 'import GlobalStyles from "./GlobalStyles"' not in text:
        text = text.replace('import WhatsAppFloat from "./components/layout/WhatsAppFloat";\n',
                            'import WhatsAppFloat from "./components/layout/WhatsAppFloat";\nimport GlobalStyles from "./GlobalStyles";\n')
    if 'React.createElement(GlobalStyles, null),' not in text:
        text = text.replace('      React.createElement(\n        BrowserRouter,\n        null,\n        React.createElement(AppContent, null),\n      ),',
                            '      React.createElement(\n        BrowserRouter,\n        null,\n        React.createElement(GlobalStyles, null),\n        React.createElement(AppContent, null),\n      ),')
    app_file.write_text(text, encoding="utf-8")

# Create wrapper placeholders in each *Styles.js file and update single-return components
for style_path in sorted(source.rglob("*Styles.js")):
    if style_path.name == "GlobalStyles.js":
        continue
    comp_name = style_path.stem.replace("Styles", "")
    wrapper_name = comp_name + "Container"
    wrapper_code = f'import styled from "styled-components";\n\nexport const {wrapper_name} = styled.div`\n  /* Styled component wrapper for {comp_name} */\n`;\n'
    style_path.write_text(wrapper_code, encoding="utf-8")
    comp_jsx = style_path.with_name(comp_name + ".jsx")
    comp_js = style_path.with_name(comp_name + ".js")
    candidate = comp_jsx if comp_jsx.exists() else (comp_js if comp_js.exists() else None)
    if candidate is None:
        continue
    text = candidate.read_text(encoding="utf-8")
    import_stmt = f'import {{ {wrapper_name} }} from "./{style_path.name}"'
    if import_stmt in text:
        continue
    lines = text.splitlines()
    insert_idx = 0
    for i, line in enumerate(lines):
        if line.startswith('import '):
            insert_idx = i + 1
    lines.insert(insert_idx, import_stmt)
    text = '\n'.join(lines)
    if text.count('return (') == 1:
        text = text.replace('return (', f'return (\n    <{wrapper_name}>', 1)
        idx = text.rfind('\n  );')
        if idx != -1:
            text = text[:idx] + f'    </{wrapper_name}>\n  );' + text[idx+5:]
    candidate.write_text(text, encoding="utf-8")

print('patch complete')
