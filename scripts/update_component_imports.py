from pathlib import Path
import re

root = Path('src')
# list of wrapper folders (relative after components/)
folders = [
  'auth/LoginForm',
  'auth/RegisterForm',
  'cart/CartSidebar',
  'cart/PaymentModal',
  'cart/SuccessModal',
  'checkout/Checkout',
  'contact/Contact',
  'contact/ContactForm',
  'home/Bio',
  'home/Hero',
  'home/Novelties',
  'layout/Footer',
  'layout/Navbar',
  'layout/WhatsAppFloat',
  'products/FilterBar',
  'products/ProductCard',
  'products/ProductDetail',
  'products/Products',
  'products/ProductsGrid',
  'UI/Button',
  'UI/Input',
  'UI/Link',
]

files = list(root.rglob('**/*'))
files = [p for p in files if p.suffix in ('.js','.jsx')]

replacements = {}
for f in folders:
    name = f.split('/')[-1]
    replacements[f] = f + '/' + name

print('Will apply replacements for', len(replacements), 'folders on', len(files), 'files')

for p in files:
    text = p.read_text(encoding='utf-8')
    new = text
    changed = False
    # Only replace inside import/from strings to reduce accidental replacements
    for orig, target in replacements.items():
        # pattern to find e.g. '../../components/auth/LoginForm' or 'components/auth/LoginForm'
        pattern = re.compile(r"(['\"])((?:\.\./)*/?components/" + re.escape(orig) + r")(\1)")
        # But simpler: replace occurrences of 'components/<orig>' when not already followed by '/'
        # We'll do a cautious string replace for common cases
        new = new.replace('/components/' + orig + "'", '/components/' + target + "'")
        new = new.replace('/components/' + orig + '"', '/components/' + target + '"')
        new = new.replace('components/' + orig + "'", 'components/' + target + "'")
        new = new.replace('components/' + orig + '"', 'components/' + target + '"')
        if new != text:
            changed = True
            text = new
    if changed:
        bak = p.with_suffix(p.suffix + '.bak')
        p.write_text(new, encoding='utf-8')
        bak.write_text(p.read_text(encoding='utf-8'), encoding='utf-8')
        print('Updated', p.as_posix())

print('done')
