/*
  Descripción: Archivo fuente del proyecto LoginInput.
  Funciones:
    - Componente React LoginInput.
  Requiere:
    - Formik para formularios
    - React
*/

import React from "react";
import { Field, ErrorMessage } from "formik";

import {
  InputContainerStyled,
  ErrorMessageStyled,
  LoginInputStyled,
} from "./LoginStyles";

const LoginInput = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <LoginInputStyled
            type={type}
            placeholder={placeholder}
            {...field}
            isError={errors[field.name] && touched[field.name]}
          />
          <ErrorMessage name={field.name}>
            {(message) => <ErrorMessageStyled>{message}</ErrorMessageStyled>}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default LoginInput;
