/*
  Descripción: Archivo fuente del proyecto AuthContext.
  Funciones:
    - Componente React AuthProvider.
    - useAuth
    - Componente React AuthContext.
  Requiere:
    - React
*/

// AuthContext guarda el usuario actual y simula login/registro.
// Los datos se guardan en localStorage para mantener la sesión al recargar.
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const parseStoredValue = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn("AuthContext: invalid localStorage data, resetting", error);
    return fallback;
  }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("wtech-user");
    return parseStoredValue(saved, null);
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      localStorage.setItem("wtech-user", JSON.stringify(user));
    } else {
      localStorage.removeItem("wtech-user");
    }
  }, [user]);

  const register = async (email, password, username) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simular validación (en producción esto iría a un backend)
      if (!email || !password || !username) {
        throw new Error("Todos los campos son requeridos");
      }

      if (password.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres");
      }

      // Simular registro
      const newUser = {
        id: Date.now(),
        email,
        username,
        createdAt: new Date().toISOString(),
      };

      setUser(newUser);
      setIsLoading(false);
      return newUser;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      if (!email || !password) {
        throw new Error("Email y contraseña son requeridos");
      }

      // Simular login (validación básica)
      const userData = {
        id: Date.now(),
        email,
        username: email.split("@")[0],
        loginAt: new Date().toISOString(),
      };

      setUser(userData);
      setIsLoading(false);
      return userData;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    setError(null);
  };

  const updateUser = (updates) => {
    setUser((prev) => {
      const next = { ...(prev || {}), ...updates };
      return next;
    });
  };

  const value = {
    user,
    isLoading,
    error,
    register,
    login,
    logout,
    updateUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de AuthProvider");
  }
  return context;
}
