/*
  Descripción: Función para formatear valores monetarios.
  Funciones:
    - formatPrice
*/

export function formatPrice(value, currency = "eTH") {
  if (value == null) return "";
  return `${value} ${currency}`;
}
