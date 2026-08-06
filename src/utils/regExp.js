/*
  Descripción: Expresiones regulares reutilizables para validación de formularios.
  Funciones:
    - regEmail
    - emailRegex
*/

export const regEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const emailRegex = regEmail;
