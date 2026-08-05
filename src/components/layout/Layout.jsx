/*
  Archivo: src/components/layout/Layout.jsx
  Descripción: Layout principal de la aplicación.
*/

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Layout general que controla el scroll al navegar entre rutas.
// Incluye soporte para enlaces con hash y restaura la posición al top.
export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        window.requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.hash]);

  return children;
}
