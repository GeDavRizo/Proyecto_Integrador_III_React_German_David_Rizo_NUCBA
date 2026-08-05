/*
  Archivo: src/utils/formatPrice.js
  Descripción: Función para formatear precios.
*/

export function formatPrice(value, currency = "eTH") {
  if (value == null) return "";
  return `${value} ${currency}`;
}
