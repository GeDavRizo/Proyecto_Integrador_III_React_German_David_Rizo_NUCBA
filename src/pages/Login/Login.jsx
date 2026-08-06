/*
  Descripción: Página de inicio de sesión para usuarios.
  Funciones:
    - Componente React LoginPage.
    - Componente React LoginPage.
    - Componente React Login.
  Requiere:
    - Módulos locales del proyecto
    - React Router
*/

import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm/LoginForm";

export default function LoginPage() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return (
      <Navigate to={`/perfil/${encodeURIComponent(user.username)}`} replace />
    );
  }

  return <LoginForm />;
}
