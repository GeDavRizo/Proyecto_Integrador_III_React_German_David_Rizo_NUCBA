from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent / "src"

external_map = {
    "axios": "Axios para llamadas HTTP",
    "react": "React",
    "react-dom": "ReactDOM",
    "react-router-dom": "React Router",
    "react-redux": "React Redux",
    "@reduxjs/toolkit": "Redux Toolkit",
    "formik": "Formik para formularios",
    "yup": "Yup para validación",
    "styled-components": "styled-components para estilos",
    "framer-motion": "Framer Motion para animaciones",
    "@emailjs/browser": "EmailJS para envío de emails",
}

folder_description = {
    "axios": "Funciones para comunicarse con la API usando Axios.",
    "services": "Servicios de lógica compartida, como envío de emails.",
    "redux": "Slices y utilidades para manejar el estado global con Redux.",
    "hooks": "Hooks personalizados para lógica reutilizable de React.",
    "formik": "Configuración y componentes de formularios con Formik.",
    "pages": "Páginas React que representan rutas completas de la aplicación.",
    "components": "Componentes React que construyen la interfaz de usuario.",
    "styles": "Definiciones de estilos globales y específicos.",
    "data": "Datos y constantes reutilizables del proyecto.",
    "utils": "Utilidades y funciones auxiliares del proyecto.",
}

page_descriptions = {
    "Home": "Página principal de la tienda con hero, productos destacados, recomendados y contacto.",
    "Products": "Página que muestra todos los productos disponibles.",
    "ProductDetail": "Página de detalle de un producto específico.",
    "Contact": "Página de contacto con formulario para enviar mensajes.",
    "About": "Página de información sobre el proyecto y el equipo.",
    "Login": "Página de inicio de sesión para usuarios.",
    "Register": "Página de registro de nuevos usuarios.",
    "Profile": "Página de perfil donde el usuario puede ver su información.",
    "MisOrdenes": "Página donde el usuario puede ver sus órdenes realizadas.",
    "Checkout": "Página de checkout para completar la compra.",
    "CheckoutSuccess": "Página de confirmación que muestra el éxito de la compra.",
    "NotFound": "Página que se muestra cuando la ruta no existe.",
}


def infer_description(path: Path, text: str) -> str:
    name = path.stem
    parts = path.parts

    if path.parent.name == "styles" or name.endswith("Styles"):
        return f"Estilos del componente o página {name.replace('Styles','')}."

    if "pages" in parts:
        return page_descriptions.get(name, f"Página React que muestra la ruta /{name.lower()}.")

    if "axios" in parts:
        if name == "axios-orders":
            return "Funciones para crear y obtener órdenes desde la API usando Axios."
        if name == "axios-user":
            return "Funciones para llamadas relacionadas con el usuario usando Axios."

    if "services" in parts:
        if name == "emailService":
            return "Servicio para enviar correos de contacto y confirmaciones de pedido usando EmailJS."

    if "redux" in parts:
        if name == "store":
            return "Configuración del store de Redux y combinación de slices."
        if name.endswith("Slice"):
            slice_name = name.replace("Slice", "")
            return f"Redux slice para manejar el estado de {slice_name}."
        if name == "cart-utils":
            return "Utilidades para gestionar cálculos y transformaciones del carrito de compras."

    if "hooks" in parts:
        return "Hook personalizado para lógica reutilizable de React."

    if "utils" in parts:
        return {
            "constants": "Define constantes reutilizables para toda la aplicación.",
            "formatDate": "Función para formatear fechas de forma consistente.",
            "formatPrice": "Función para formatear valores monetarios.",
            "pickRandomProducts": "Función para seleccionar productos aleatorios del catálogo.",
            "regExp": "Expresiones regulares reutilizables para validación de formularios.",
            "index": "Exporta utilidades compartidas para el proyecto.",
        }.get(name, "Utilidad auxiliar del proyecto.")

    if "formik" in parts:
        if name == "initialValues":
            return "Valores iniciales para formularios gestionados con Formik."
        if name == "validationSchema":
            return "Esquema de validación con Yup para los formularios de la aplicación."
        return "Configuración o componente relacionado con formularios Formik."

    if "components" in parts:
        if name == "ProtectedRoute":
            return "Componente de ruta protegida que restringe acceso a usuarios autenticados."
        if name in ["LoginForm", "RegisterForm"]:
            return f"Formulario de usuario para {name.replace('Form','').lower()} en la aplicación."
        if name == "CartSidebar":
            return "Componente que muestra el carrito lateral, resumen de productos y navegación a checkout."
        if name == "PaymentModal":
            return "Modal de selección de método de pago para el carrito."
        if name == "SuccessModal":
            return "Modal de éxito que muestra la confirmación del pago."
        if name == "ProductCard":
            return "Tarjeta que muestra los datos de un producto en la lista de productos."
        if name == "ProductsGrid":
            return "Cuadrícula que organiza y muestra los productos disponibles."
        if name == "FilterBar":
            return "Barra de filtros que permite buscar productos por categoría y precio."
        if name == "ProductDetail":
            return "Componente que muestra la información completa de un producto." 
        if name == "Checkout":
            return "Componente principal de checkout con formulario, validaciones y confirmación de pedido."
        if name == "Contact":
            return "Sección de contacto con formulario e información de la página."
        if name == "WhatsAppFloat":
            return "Botón flotante para iniciar una conversación por WhatsApp." 
    return f"Archivo fuente del proyecto {name}."


def infer_functions(text: str, path: Path) -> list[str]:
    funcs = []
    if "export const" in text:
        for match in re.finditer(r"export const\s+(\w+)", text):
            funcs.append(match.group(1))
    if "export function" in text:
        for match in re.finditer(r"export function\s+(\w+)", text):
            funcs.append(match.group(1))
    if "function " in text and "export default" in text:
        match = re.search(r"function\s+(\w+)", text)
        if match:
            funcs.append(match.group(1))
    if "export default function" in text:
        match = re.search(r"export default function\s+(\w+)", text)
        if match:
            funcs.append(match.group(1))
    if "export default" in text and "function" not in text:
        if path.stem[0].isupper():
            funcs.append(path.stem)
    if path.stem[0].isupper() and path.name.endswith(".jsx"):
        if path.stem not in funcs:
            funcs.append(path.stem)
    return funcs


def infer_requires(text: str) -> list[str]:
    requires = set()
    for line in text.splitlines():
        if line.strip().startswith("import"):
            match = re.search(r"from\s+[\"']([^\"']+)[\"']", line)
            if match:
                module = match.group(1)
                if module in external_map:
                    requires.add(external_map[module])
                elif module.startswith("./") or module.startswith("../"):
                    requires.add("Módulos locales del proyecto")
                else:
                    part = module.split("/")[0]
                    if part in external_map:
                        requires.add(external_map[part])
                    else:
                        requires.add(part)
    return sorted(requires)


def build_header(description: str, functions: list[str], requires: list[str]) -> str:
    lines = ["/*", f"  Descripción: {description}"]
    if functions:
        lines.append("  Funciones:")
        for fn in functions:
            pretty = fn
            if fn[0].isupper():
                pretty = f"Componente React {fn}."
            lines.append(f"    - {pretty}")
    if requires:
        lines.append("  Requiere:")
        for req in requires:
            lines.append(f"    - {req}")
    lines.append("*/")
    return "\n".join(lines) + "\n\n"

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
            stripped = stripped[end + 2 :].lstrip("\r\n")
    description = infer_description(path, stripped)
    functions = infer_functions(stripped, path)
    requires = infer_requires(stripped)
    new_text = prefix + leading_ws + build_header(description, functions, requires) + stripped
    path.write_text(new_text, encoding="utf-8")
