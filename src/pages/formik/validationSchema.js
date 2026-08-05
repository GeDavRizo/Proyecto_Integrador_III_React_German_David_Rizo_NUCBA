/*
  Archivo: src/pages/formik/validationSchema.js
  Descripción: Página React de la aplicación.
*/

import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("Nombre es requerido"),
  surname: Yup.string().required("Apellido es requerido"),
  age: Yup.number()
    .typeError("Edad debe ser un número")
    .min(13, "Debes tener al menos 13 años")
    .required("Edad es requerida"),
  email: Yup.string().email("Email inválido").required("Email es requerido"),
  objetivoPrincipal: Yup.string().required("Selecciona un objetivo"),
  nivelActividad: Yup.string().required("Selecciona un nivel de actividad"),
  deportes: Yup.string().required("Selecciona un deporte o actividad"),
  tipoCalzado: Yup.string().required("Selecciona un tipo de calzado"),
  dispositivosVision: Yup.string().required(
    "Selecciona un dispositivo de visión",
  ),
  ecosistema: Yup.string().required("Selecciona un ecosistema"),
  accesorios: Yup.string().required("Selecciona un accesorio"),
  marcas: Yup.string().required("Selecciona una marca"),
  osTelefono: Yup.string().required("Selecciona un sistema operativo"),
});
