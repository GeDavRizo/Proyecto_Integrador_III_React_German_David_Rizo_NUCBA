/*
  Archivo: src/utils/formatDate.js
  Descripción: Función para formatear fechas.
*/

export const formatDate = (date) => {
  if (!date) return "";

  const [fecha, hora = "00:00:00"] = String(date).split("T");
  const fechaLegible = fecha.split("-").reverse().join("/");
  const horaLegible = hora.split(".")[0].split(":").slice(0, 2).join(":");

  return `${fechaLegible} ${horaLegible}`;
};

export default formatDate;
