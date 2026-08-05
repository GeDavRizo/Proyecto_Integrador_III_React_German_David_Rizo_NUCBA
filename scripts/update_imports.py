from pathlib import Path
replacements = {
  'src/pages/Login/Login.jsx': {
    '../../components/auth/LoginForm': '../../components/auth/LoginForm/LoginForm'
  },
  'src/pages/Register/Register.jsx': {
    '../../components/auth/RegisterForm': '../../components/auth/RegisterForm/RegisterForm'
  },
  'src/pages/About/About.jsx': {
    '../../components/home/Bio': '../../components/home/Bio/Bio'
  },
  'src/pages/Home/Home.jsx': {
    '../../components/home/Hero': '../../components/home/Hero/Hero',
    '../../components/home/Bio': '../../components/home/Bio/Bio',
    '../../components/home/Novelties': '../../components/home/Novelties/Novelties',
    '../../components/products/Products': '../../components/products/Products/Products',
    '../../components/contact/Contact': '../../components/contact/Contact/Contact'
  },
  'src/pages/ProductDetail/ProductDetail.jsx': {
    '../../components/products/ProductDetail': '../../components/products/ProductDetail/ProductDetail'
  },
  'src/pages/Products/Products.jsx': {
    '../../components/products/Products': '../../components/products/Products/Products'
  },
  'src/pages/Checkout/Checkout.jsx': {
    '../../components/checkout/Checkout': '../../components/checkout/Checkout/Checkout'
  },
  'src/pages/Contact/Contact.jsx': {
    '../../components/contact/Contact': '../../components/contact/Contact/Contact'
  }
}

root = Path('.')
for file, reps in replacements.items():
    p = root / file
    if not p.exists():
        print('MISSING', file)
        continue
    text = p.read_text(encoding='utf-8')
    new = text
    for a,b in reps.items():
        if a in new:
            new = new.replace(a, b)
            print('Replaced in', file, a, '→', b)
    if new != text:
        bak = p.with_suffix(p.suffix + '.bak')
        p.write_text(new, encoding='utf-8')
        bak.write_text(text, encoding='utf-8')
        print('Updated', file, 'backup at', bak.as_posix())
print('done')
