/*
  Descripción: Hook personalizado para lógica reutilizable de React.
  Requiere:
    - React
    - React Redux
    - React Router
*/

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Hook personalizado que redirige cuando el usuario ya está logueado.
const useRedirect = (redirectTo) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate(redirectTo);
    }
  }, [currentUser, navigate, redirectTo]);
};

export default useRedirect;
