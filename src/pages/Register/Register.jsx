/*
  Descripción: Página de registro de nuevos usuarios.
  Funciones:
    - Componente React RegisterPage.
    - Componente React RegisterPage.
    - Componente React Register.
  Requiere:
    - Módulos locales del proyecto
    - React Router
*/

import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import RegisterForm from "../../components/auth/RegisterForm/RegisterForm";

export default function RegisterPage() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return (
      <Navigate to={`/perfil/${encodeURIComponent(user.username)}`} replace />
    );
  }

  return <RegisterForm />;
}
