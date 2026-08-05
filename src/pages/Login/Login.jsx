/*
  Archivo: src/pages/Login/Login.jsx
  Descripción: Página React de la aplicación.
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
