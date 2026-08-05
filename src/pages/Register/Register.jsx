/*
  Archivo: src/pages/Register/Register.jsx
  Descripción: Página React de la aplicación.
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
