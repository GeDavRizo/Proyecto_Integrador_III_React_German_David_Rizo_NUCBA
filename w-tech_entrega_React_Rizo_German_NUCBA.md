# W-TECH - Entrega React - Germán David Rizo A. - NUCBA

Este proyecto es una tienda online de productos tecnológicos creada en React con Vite. Está pensada como un e-commerce de tecnología propio, con diseño responsive y funcionalidades completas para navegar, comprar y contactar.

## Qué hace la página

- Página principal (`/`) con hero, sección de productos destacados, recomendados, about y contacto.
- Página de productos (`/productos`) donde se muestran todos los productos de forma dinámica.
- Página de producto individual (`/productos/:id`) para ver más información y agregar al carrito.
- Página de contacto (`/contacto`) con formulario validado con Formik.
- Página de nosotros (`/nosotros`) con información del proyecto.
- Página de login (`/login`) y registro (`/registro`) para acceder a funciones protegidas.
- Perfil de usuario (`/perfil/:username`) y checkout protegido únicamente para usuarios autenticados.
- Carrito de compras lateral que se puede abrir y cerrar desde la navbar.
- Checkout con formulario de compra y confirmación de pedido.

## Funcionalidades principales

- Agregar productos al carrito.
- Aumentar o disminuir cantidad de cada producto en el carrito.
- Eliminar productos del carrito.
- Vaciar el carrito completo.
- Persistencia del carrito usando `redux-persist` para mantenerlo después de recargar la página.
- Validación de formulario de contacto usando `Formik` y `Yup`.
- Envío de email desde el formulario de contacto usando EmailJS.
- Diseño responsive para móviles, tablets y desktop.
- Rutas protegidas con React Router y un componente `ProtectedRoute`.
- Estados de usuario y carrito administrados con Context / Redux según cada caso.

## Estructura principal

- `src/App.js`: base de la aplicación, provee el router y contextos.
- `src/routes/Routes.jsx`: define todas las rutas de la aplicación.
- `src/context/AuthContext.jsx`: administra el login/registro simulado y guarda el usuario en `localStorage`.
- `src/context/CartContext.jsx`: administra el carrito, su persistencia y la lógica de pago.
- `src/components/contact/ContactForm/ContactForm.jsx`: formulario de contacto con validaciones.
- `src/components/products/ProductsGrid/ProductsGrid.jsx`: muestra productos, aplica filtros y paginación.

---

### Notas

- El envío de emails se realiza con EmailJS, un servicio externo al que la aplicación se conecta por Internet.
- EmailJS se usa en:
  - `src/components/contact/ContactForm/ContactForm.jsx` para el formulario de contacto.
  - `src/components/checkout/Checkout/Checkout.jsx` para la confirmación de pedido.
- No se utiliza EmailJS para los formularios de login o registro.
