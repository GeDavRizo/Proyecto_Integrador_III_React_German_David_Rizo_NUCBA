from pathlib import Path

root = Path(__file__).resolve().parent.parent / "src"

known_descriptions = {
    "App.js": "Componente principal de la aplicación que monta el router, contextos y layout global.",
    "main.jsx": "Punto de entrada de React que renderiza la aplicación en el DOM.",
    "Routes.jsx": "Define las rutas públicas y protegidas de la aplicación usando React Router.",
    "AuthContext.jsx": "Contexto para manejar autenticación, usuario y estado de sesión.",
    "CartContext.jsx": "Contexto para manejar el carrito de compras, apertura de paneles y estado de pago.",
    "emailService.js": "Servicio para enviar emails con EmailJS, usado por contacto y confirmación de pedidos.",
    "axios-orders.js": "Funciones Axios para obtener y crear órdenes desde el backend.",
    "axios-user.js": "Funciones Axios para solicitudes relacionadas con el usuario.",
    "store.js": "Configura el store de Redux y exporta los slices principales de la aplicación.",
    "GlobalStyles.js": "Define estilos globales y temas compartidos para la aplicación.",
    "constants.js": "Contiene constantes reutilizables usadas en todo el proyecto.",
    "formatDate.js": "Función para formatear fechas de manera consistente en la app.",
    "formatPrice.js": "Función para formatear precios y valores monetarios.",
    "pickRandomProducts.js": "Utilidad para seleccionar productos aleatorios de la lista disponible.",
    "regExp.js": "Expresiones regulares reutilizables para validación y filtrado.",
}

folder_descriptions = {
    "auth": "Componente de autenticación para login y registro de usuarios.",
    "cart": "Componentes que muestran y gestionan el carrito de compras.",
    "checkout": "Componentes relacionados con el flujo de pago y confirmación de pedido.",
    "contact": "Componentes para el formulario y la sección de contacto.",
    "home": "Componentes de la página principal y sus secciones.",
    "layout": "Componentes de layout que definen la estructura global de la interfaz.",
    "products": "Componentes que muestran productos, filtros y detalles.",
    "Recomendados": "Componentes para la sección de productos recomendados.",
    "MisOrdenes": "Componentes para mostrar y gestionar las órdenes del usuario.",
    "UI": "Componentes de interfaz reutilizables, como botones e inputs.",
    "formik": "Formularios y validaciones construidos con Formik y Yup.",
    "redux": "Redux slices y utilidades para manejar el estado de la aplicación.",
    "pages": "Páginas principales del sitio que representan rutas completas.",
}


def infer_description(path: Path) -> str:
    name = path.name
    if name in known_descriptions:
        return known_descriptions[name]

    if name.endswith("Styles.js"):
        base = name[:-9]
        return f"Estilos para el componente o página {base}."

    if name.endswith(".jsx"):
        if "pages" in path.parts:
            page = path.stem
            return f"Página React para la ruta /{page.lower()}" if page not in ["Home"] else "Página principal de la aplicación."

        if path.parts[-2] == "UI":
            return f"Componente de interfaz reutilizable: {path.stem}."

        if path.stem == "ProtectedRoute":
            return "Componente de ruta protegida que requiere usuario autenticado para acceder a ciertas páginas."

        if path.stem == "ContactForm":
            return "Formulario de contacto con validación y envío de mensajes por correo."

        if path.stem == "CardRecomendacion":
            return "Componente para mostrar una recomendación individual de producto."

        if path.stem == "CardsRecomendacion":
            return "Componente que muestra una lista de productos recomendados."

        if path.stem == "ProductCard":
            return "Componente que representa la tarjeta de un producto en la lista."

        if path.stem == "ProductDetail":
            return "Componente que muestra la página de detalle de un producto."

        if path.stem == "ProductsGrid":
            return "Componente que organiza los productos en una cuadrícula visual." 

        if path.stem == "Products":
            return "Componente que muestra la lista completa de productos disponibles."

        if path.stem == "Login":
            return "Página de login para autenticar usuarios en la aplicación."

        if path.stem == "Register":
            return "Página de registro para nuevos usuarios."

    if "redux" in path.parts:
        if name.endswith("Slice.js"):
            slice = path.stem.replace("Slice", "").lower()
            return f"Redux slice para manejar el estado de {slice}."
        if name.endswith("cart-utils.js"):
            return "Utilidad para cálculos y transformaciones relacionados con el carrito de compras."

    if "utils" in path.parts:
        if name == "index.js":
            return "Exporta utilidades y funciones auxiliares del proyecto."
        if name == "constants.js":
            return "Define constantes de configuración y valores compartidos." 
        if name == "formatDate.js":
            return "Función para formatear fechas en toda la aplicación." 
        if name == "formatPrice.js":
            return "Función para formatear precios y valores monetarios." 
        if name == "pickRandomProducts.js":
            return "Utilidad para seleccionar productos aleatorios de la colección." 
        if name == "regExp.js":
            return "Expresiones regulares reutilizables para validación y filtrado." 

    if "formik" in path.parts:
        if name == "initialValues.js":
            return "Valores iniciales para formularios gestionados por Formik." 
        if name == "validationSchema.js":
            return "Esquema de validación Yup para los formularios de usuario." 
        if name == "FormInput.jsx":
            return "Componente de campo de formulario reutilizable para Formik." 
        if name == "ProfileFormikForm.jsx":
            return "Formulario de perfil de usuario construido con Formik." 

    if "components" in path.parts:
        for folder, desc in folder_descriptions.items():
            if folder in path.parts:
                return desc
        return f"Componente React usado por la aplicación para la interfaz de usuario." 

    if "pages" in path.parts:
        page = path.stem
        return f"Página React que representa la ruta {page.lower()} en la aplicación." 

    return "Archivo fuente del proyecto." 


def build_header(description: str) -> str:
    return f"/*\n  Descripción: {description}\n*/\n\n"

for path in sorted(root.rglob("*.js")) + sorted(root.rglob("*.jsx")):
    text = path.read_text(encoding="utf-8")
    prefix = ""
    if text.startswith("\ufeff"):
        prefix = "\ufeff"
        text = text[1:]

    stripped = text.lstrip("\r\n")
    leading_ws = text[: len(text) - len(stripped)]
    if stripped.startswith("/*"):
        end = stripped.find("*/")
        if end != -1:
            rest = stripped[end + 2 :]
            new_text = prefix + leading_ws + build_header(infer_description(path)) + rest.lstrip("\r\n")
            path.write_text(new_text, encoding="utf-8")
            continue

    new_text = prefix + leading_ws + build_header(infer_description(path)) + stripped
    path.write_text(new_text, encoding="utf-8")
