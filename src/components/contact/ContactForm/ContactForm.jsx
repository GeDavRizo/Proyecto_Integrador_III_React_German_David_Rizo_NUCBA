// ContactForm.jsx maneja el formulario de contacto con Formik y validación.
// Si todos los campos son válidos, envía el mensaje usando EmailJS.
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendContactEmail } from "../../../services/emailService";
import { ContactFormContainer } from "./ContactFormStyles.js";

const validationSchema = Yup.object({
  nombre: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres.")
    .max(50, "El nombre no puede superar los 50 caracteres.")
    .required("El nombre es requerido."),
  apellido: Yup.string()
    .min(3, "El apellido debe tener al menos 3 caracteres.")
    .required("El apellido es requerido."),
  email: Yup.string()
    .email("Ingresá un email válido (ej: tu@email.com).")
    .required("El email es requerido."),
  telefono: Yup.string()
    .matches(
      /^[0-9 +()-]*$/,
      "El teléfono solo puede contener números, espacios, +, () y -.",
    )
    .min(8, "El teléfono debe tener al menos 8 caracteres.")
    .max(25, "El teléfono no puede superar los 25 caracteres.")
    .required("El teléfono es requerido."),
  asunto: Yup.string()
    .min(5, "El asunto debe tener al menos 5 caracteres.")
    .max(100, "El asunto no puede superar los 100 caracteres.")
    .required("El asunto es requerido."),
  mensaje: Yup.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres.")
    .max(1000, "El mensaje no puede superar los 1000 caracteres.")
    .required("El mensaje es requerido."),
});

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      setError(null);

      try {
        // Enviar email con EmailJS
        await sendContactEmail({
          name: `${values.nombre} ${values.apellido}`,
          email: values.email,
          phone: values.telefono,
          subject: values.asunto,
          message: values.mensaje,
        });

        setSubmitted(true);
        resetForm();
        setTimeout(() => setSubmitted(false), 5000);
      } catch (err) {
        setError(
          "Error al enviar el mensaje. Por favor intenta de nuevo más tarde.",
        );
        console.error("Error al enviar email:", err);
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <ContactFormContainer>
      <form
        id="contact-form"
        className="contact-form"
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={`form-input ${formik.touched.nombre && formik.errors.nombre ? "error" : formik.touched.nombre ? "success" : ""}`}
            placeholder="Tu nombre"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.nombre}
          />
          {formik.touched.nombre && formik.errors.nombre && (
            <span className="form-error">{formik.errors.nombre}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="apellido" className="form-label">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            className={`form-input ${formik.touched.apellido && formik.errors.apellido ? "error" : formik.touched.apellido ? "success" : ""}`}
            placeholder="Tu apellido"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.apellido}
          />
          {formik.touched.apellido && formik.errors.apellido && (
            <span className="form-error">{formik.errors.apellido}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${formik.touched.email && formik.errors.email ? "error" : formik.touched.email ? "success" : ""}`}
            placeholder="tu@email.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="form-error">{formik.errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="telefono" className="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className={`form-input ${formik.touched.telefono && formik.errors.telefono ? "error" : formik.touched.telefono ? "success" : ""}`}
            placeholder="Tu teléfono de contacto"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.telefono}
          />
          {formik.touched.telefono && formik.errors.telefono && (
            <span className="form-error">{formik.errors.telefono}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="asunto" className="form-label">
            Asunto
          </label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            className={`form-input ${formik.touched.asunto && formik.errors.asunto ? "error" : formik.touched.asunto ? "success" : ""}`}
            placeholder="¿Cuál es el motivo de tu consulta?"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.asunto}
          />
          {formik.touched.asunto && formik.errors.asunto && (
            <span className="form-error">{formik.errors.asunto}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            className={`form-input form-textarea ${formik.touched.mensaje && formik.errors.mensaje ? "error" : formik.touched.mensaje ? "success" : ""}`}
            placeholder="Escribe tu mensaje aquí..."
            rows="6"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mensaje}
          />
          {formik.touched.mensaje && formik.errors.mensaje && (
            <span className="form-error">{formik.errors.mensaje}</span>
          )}
        </div>

        {error && <div className="form-error-message">❌ {error}</div>}

        {submitted && (
          <div className="form-success">
            ✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.
          </div>
        )}

        <div className="contact-submit-wrap">
          <button
            type="submit"
            className="btn-primary"
            id="contact-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? "ENVIANDO..." : "ENVIAR MENSAJE →"}
          </button>
        </div>
      </form>{" "}
    </ContactFormContainer>
  );
}

export default ContactForm;
