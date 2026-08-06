/*
  Descripción: Componente de ruta protegida que restringe acceso a usuarios autenticados.
  Funciones:
    - Componente React ProtectedRoute.
    - Componente React ProtectedRoute.
  Requiere:
    - Módulos locales del proyecto
    - React Router
*/

import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Ruta protegida que controla el acceso a páginas privadas según la sesión.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
