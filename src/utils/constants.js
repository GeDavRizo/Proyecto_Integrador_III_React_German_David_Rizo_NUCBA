/*
  Descripción: Define constantes reutilizables para toda la aplicación.
  Funciones:
    - Componente React CURRENCIES.
    - Componente React APP_NAME.
    - Componente React BASE_URL.
    - Componente React INITIAL_LIMIT.
*/

export const CURRENCIES = {
  ETH: "eTH",
};

export const APP_NAME = "W-TECH";

export const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:4000/api";

export const INITIAL_LIMIT = 4;
