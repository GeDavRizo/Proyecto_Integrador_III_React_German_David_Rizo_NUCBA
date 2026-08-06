/*
  Descripción: Esquema de validación con Yup para los formularios de la aplicación.
  Funciones:
    - checkoutValidationSchema
    - registerValidationSchema
  Requiere:
    - Yup para validación
*/

import * as Yup from "yup";

export const checkoutValidationSchema = Yup.object({
  firstName: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: Yup.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  cellphone: Yup.string()
    .required("El teléfono es obligatorio")
    .min(10, "El teléfono debe tener al menos 10 dígitos"),
  location: Yup.string().required("La provincia/estado es obligatorio"),
  address: Yup.string().required("La dirección es obligatoria"),
  city: Yup.string().required("La ciudad es obligatoria"),
  postalCode: Yup.string(),
  country: Yup.string().required("El país es obligatorio"),
  cardName: Yup.string().required("El nombre de la tarjeta es obligatorio"),
  cardNumber: Yup.string()
    .min(16, "La tarjeta debe tener 16 dígitos")
    .required("El número de tarjeta es obligatorio"),
  cardExpiry: Yup.string().required("La fecha de vencimiento es obligatoria"),
  cardCVC: Yup.string()
    .min(3, "El CVC debe tener al menos 3 dígitos")
    .required("El CVC es obligatorio"),
  termsAccepted: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones",
  ),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .required("El nombre es obligatorio")
    .min(2, "El nombre debe tener al menos 2 caracteres"),
  email: Yup.string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});
