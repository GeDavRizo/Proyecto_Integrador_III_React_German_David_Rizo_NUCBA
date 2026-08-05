/*
  Archivo: src/pages/formik/FormInput.jsx
  Descripción: Página React de la aplicación.
*/

import { Field, ErrorMessage } from "formik";

export default function FormInput({
  label,
  name,
  type = "text",
  asSelect = false,
  children,
  ...props
}) {
  return (
    <div className="profile-form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      {asSelect ? (
        <Field
          id={name}
          name={name}
          as="select"
          className="form-input"
          {...props}
        >
          <option value="">Selecciona una opción</option>
          {children}
        </Field>
      ) : (
        <Field
          id={name}
          name={name}
          type={type}
          className="form-input"
          {...props}
        />
      )}

      <ErrorMessage name={name} component="div" className="form-error" />
    </div>
  );
}
