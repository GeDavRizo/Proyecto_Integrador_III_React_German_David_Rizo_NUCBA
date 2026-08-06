/*
  Descripción: Archivo fuente del proyecto Link.
  Funciones:
    - Componente React Link.
    - Componente React Link.
  Requiere:
    - React Router
*/

// import React from "react"; // unused with new JSX runtime
import { Link as RouterLink } from "react-router-dom";

export default function Link({ to, children, ...rest }) {
  return (
    <RouterLink to={to} {...rest}>
      {children}
    </RouterLink>
  );
}
