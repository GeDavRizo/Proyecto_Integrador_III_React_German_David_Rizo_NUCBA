/*
  Archivo: src/pages/formik/ProfileFormikForm.jsx
  Descripción: Página React de la aplicación.
*/

import { Formik, Form } from "formik";
import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import FormInput from "./FormInput";
import { initialValues } from "./initialValues";
import { validationSchema } from "./validationSchema";

const optionLists = {
  objetivoPrincipal: [
    {
      value: "control_actividad",
      label: "Controlar mi actividad diaria y pasos",
    },
    { value: "mejorar_rendimiento", label: "Mejorar el rendimiento deportivo" },
    {
      value: "monitorear_sueno",
      label: "Monitorear el sueño y reducir estrés",
    },
    { value: "control_peso", label: "Controlar el peso y calorías" },
    { value: "cuidar_salud", label: "Cuidar la salud general" },
  ],
  nivelActividad: [
    { value: "sedentario", label: "Sedentario" },
    { value: "ligero", label: "Ligero" },
    { value: "moderado", label: "Moderado" },
    { value: "intenso", label: "Intenso" },
  ],
  deportes: [
    { value: "running", label: "Running / Caminata" },
    { value: "ciclismo", label: "Ciclismo" },
    { value: "natacion", label: "Natación / Deportes acuáticos" },
    { value: "gimnasio", label: "Gimnasio / Musculación / Crossfit" },
    { value: "yoga", label: "Yoga / Pilates" },
    { value: "equipos", label: "Deportes de equipo" },
    { value: "trekking", label: "Trekking / Senderismo" },
  ],
  tipoCalzado: [
    {
      value: "zapatillas_sensores",
      label: "Zapatillas con sensores de pisada",
    },
    { value: "plantillas", label: "Plantillas inteligentes" },
    { value: "ninguno_calzado", label: "Ninguno / Tradicional" },
  ],
  dispositivosVision: [
    { value: "gafas_audio", label: "Gafas inteligentes con audio / cámara" },
    { value: "gafas_ar", label: "Gafas AR para entrenamiento" },
    { value: "ninguno_vision", label: "Ninguno / No utilizo" },
  ],
  ecosistema: [
    { value: "smart_foot", label: "Smart Foot" },
    { value: "neural_band", label: "Neural Band" },
    { value: "aura_patch", label: "Aura Patch" },
    { value: "ninguno_ecosistema", label: "Ninguno / Tradicional" },
  ],
  accesorios: [
    { value: "smart_ring", label: "Smart Ring" },
    { value: "holowatch", label: "Holowatch" },
    { value: "smartband", label: "Smartband tradicional" },
    { value: "smartwatch", label: "Smartwatch clásico" },
  ],
  marcas: [
    { value: "apple", label: "Apple" },
    { value: "garmin", label: "Garmin" },
    { value: "samsung", label: "Samsung" },
    { value: "xiaomi", label: "Xiaomi / Redmi / Poco" },
    { value: "fitbit", label: "Fitbit" },
    { value: "huawei", label: "Huawei" },
    { value: "amazfit", label: "Amazfit" },
    { value: "suunto", label: "Suunto" },
    { value: "polar", label: "Polar" },
    { value: "coros", label: "Coros" },
    { value: "whoop", label: "Whoop" },
    { value: "oura", label: "Oura" },
  ],
  osTelefono: [
    { value: "android", label: "Android" },
    { value: "ios", label: "iOS" },
    { value: "otro", label: "Otro / No estoy seguro" },
  ],
};

export default function ProfileFormikForm({ onSaved }) {
  const { user, updateUser } = useAuth();

  const formValues = { ...initialValues, ...(user || {}) };

  const handleSubmit = (values, { setSubmitting }) => {
    updateUser(values);
    setSubmitting(false);
    if (onSaved) onSaved();
  };

  return (
    <Formik
      initialValues={formValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <FormInput name="name" label="Nombre" />
          <FormInput name="surname" label="Apellido" />
          <FormInput name="age" label="Edad" type="number" />
          <FormInput name="email" label="Correo electrónico" type="email" />

          <FormInput
            name="objetivoPrincipal"
            label="Objetivo principal"
            asSelect
          >
            {optionLists.objetivoPrincipal.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput name="nivelActividad" label="Nivel de actividad" asSelect>
            {optionLists.nivelActividad.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput
            name="deportes"
            label="Deporte o actividad favorita"
            asSelect
          >
            {optionLists.deportes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput name="tipoCalzado" label="Tipo de calzado" asSelect>
            {optionLists.tipoCalzado.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput
            name="dispositivosVision"
            label="Dispositivo de visión"
            asSelect
          >
            {optionLists.dispositivosVision.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput name="ecosistema" label="Ecosistema" asSelect>
            {optionLists.ecosistema.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput name="accesorios" label="Accesorios" asSelect>
            {optionLists.accesorios.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput name="marcas" label="Marcas" asSelect>
            {optionLists.marcas.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <FormInput name="osTelefono" label="Sistema operativo" asSelect>
            {optionLists.osTelefono.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </FormInput>

          <button type="submit" disabled={isSubmitting} className="auth-button">
            {isSubmitting ? "Guardando..." : "Guardar cambios"}
          </button>
        </StyledForm>
      )}
    </Formik>
  );
}

const StyledForm = styled(Form)`
  display: grid;
  gap: 1rem;

  .profile-form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-label {
    font-family: "Orbitron", sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    color: #cbd5e1;
  }

  .form-input {
    width: 100%;
    padding: 10px 12px;
    border-radius: 10px;
    border: 1px solid rgba(148, 163, 184, 0.18);
    background: #ffffff;
    color: #0f172a;
    font-size: 1rem;
    outline: none;
    transition:
      box-shadow 0.2s ease,
      border-color 0.2s ease;
  }

  .form-input:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 6px rgba(124, 58, 237, 0.06);
  }

  .form-error {
    color: #f87171;
    font-size: 0.875rem;
    min-height: 1.2rem;
  }
`;
