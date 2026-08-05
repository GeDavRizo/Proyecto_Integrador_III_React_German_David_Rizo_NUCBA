/*
  Archivo: src/pages/Profile/Profile.jsx
  Descripción: Página React de la aplicación.
*/

import styled from "styled-components";
import { useAuth } from "../../context/AuthContext";
import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import ProfileFormikForm from "../formik/ProfileFormikForm";

const optionLabels = {
  objetivoPrincipal: {
    control_actividad: "Controlar mi actividad diaria y pasos",
    mejorar_rendimiento: "Mejorar el rendimiento deportivo",
    monitorear_sueno: "Monitorear el sueño y reducir estrés",
    control_peso: "Controlar el peso y calorías",
    cuidar_salud: "Cuidar la salud general",
  },
  nivelActividad: {
    sedentario: "Sedentario",
    ligero: "Ligero",
    moderado: "Moderado",
    intenso: "Intenso",
  },
  deportes: {
    running: "Running / Caminata",
    ciclismo: "Ciclismo",
    natacion: "Natación / Deportes acuáticos",
    gimnasio: "Gimnasio / Musculación / Crossfit",
    yoga: "Yoga / Pilates",
    equipos: "Deportes de equipo",
    trekking: "Trekking / Senderismo",
  },
  tipoCalzado: {
    zapatillas_sensores: "Zapatillas con sensores de pisada",
    plantillas: "Plantillas inteligentes",
    ninguno_calzado: "Ninguno / Tradicional",
  },
  dispositivosVision: {
    gafas_audio: "Gafas inteligentes con audio / cámara",
    gafas_ar: "Gafas AR para entrenamiento",
    ninguno_vision: "Ninguno / No utilizo",
  },
  ecosistema: {
    smart_foot: "Smart Foot",
    neural_band: "Neural Band",
    aura_patch: "Aura Patch",
    ninguno_ecosistema: "Ninguno / Tradicional",
  },
  accesorios: {
    smart_ring: "Smart Ring",
    holowatch: "Holowatch",
    smartband: "Smartband tradicional",
    smartwatch: "Smartwatch clásico",
  },
  marcas: {
    apple: "Apple",
    garmin: "Garmin",
    samsung: "Samsung",
    xiaomi: "Xiaomi / Redmi / Poco",
    fitbit: "Fitbit",
    huawei: "Huawei",
    amazfit: "Amazfit",
    suunto: "Suunto",
    polar: "Polar",
    coros: "Coros",
    whoop: "Whoop",
    oura: "Oura",
  },
  osTelefono: {
    android: "Android",
    ios: "iOS",
    otro: "Otro / No estoy seguro",
  },
};

const ProfileSection = styled.section`
  max-width: 860px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 24px;
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 20px 80px rgba(15, 23, 42, 0.25);
`;

const FieldCard = styled.div`
  display: grid;
  gap: 8px;
  background: rgba(255, 255, 255, 0.04);
  padding: 18px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.18);
`;

const FieldLabel = styled.span`
  color: #94a3b8;
  font-weight: 600;
`;

const ViewSelect = styled.select`
  width: 100%;
  background: rgba(255, 255, 255, 0.96);
  color: #0f172a;
  border: 1px solid rgba(148, 163, 184, 0.55);
  border-radius: 12px;
  padding: 12px 14px;
  font-size: 1rem;
  appearance: none;
  cursor: default;

  option {
    color: #0f172a;
    background: #ffffff;
  }
`;

const ViewContainer = styled.div`
  display: grid;
  gap: 18px;
  margin-top: 18px;
`;

function getOptions(key) {
  return Object.entries(optionLabels[key] || {}).map(([value, label]) => ({
    value,
    label,
  }));
}

function DisplaySelect({ label, value, options, multiple = false }) {
  const toSingleValue = (rawValue) => {
    if (typeof rawValue === "string") {
      if (options.some((option) => option.value === rawValue)) {
        return rawValue;
      }
      const matchedOption = options.find((option) => option.label === rawValue);
      return matchedOption ? matchedOption.value : rawValue;
    }

    if (Array.isArray(rawValue)) {
      return rawValue.length > 0 ? rawValue : "";
    }

    return "";
  };

  const selectValue = multiple
    ? Array.isArray(value) && value.length > 0
      ? value
      : [""]
    : toSingleValue(value);

  return (
    <FieldCard>
      <FieldLabel>{label}</FieldLabel>
      <ViewSelect
        disabled
        multiple={multiple}
        size={multiple ? Math.min(6, options.length + 1) : 1}
        value={selectValue}
      >
        <option value="">-- Selecciona --</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </ViewSelect>
    </FieldCard>
  );
}

export default function ProfilePage() {
  const { user } = useAuth();
  const { username } = useParams();
  const [editing, setEditing] = useState(false);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const currentUsername = user.username || "";
  const requestedUsername = username ? decodeURIComponent(username) : "";

  if (!requestedUsername || requestedUsername !== currentUsername) {
    return (
      <Navigate to={`/perfil/${encodeURIComponent(currentUsername)}`} replace />
    );
  }

  return (
    <main style={{ padding: "120px 24px 40px", minHeight: "75vh" }}>
      <ProfileSection>
        <h1 style={{ marginBottom: 12, fontSize: "2rem", color: "#f8fafc" }}>
          Mi Perfil
        </h1>
        <p style={{ marginBottom: 8, color: "#cbd5e1" }}>
          Bienvenido{user?.username ? `, ${user.username}` : ""}. Aquí puedes
          ver y editar tu información de cuenta.
        </p>

        <div style={{ marginTop: 18 }}>
          <button
            onClick={() => setEditing((v) => !v)}
            className="auth-button"
            style={{
              marginRight: 12,
              padding: "10px 18px",
              borderRadius: 10,
              fontSize: 16,
              background: "linear-gradient(135deg,#7B6FBF 0%,#4F46E5 100%)",
            }}
          >
            {editing ? "Ver perfil" : "Editar perfil"}
          </button>
        </div>

        {!editing && (
          <ViewContainer>
            <FieldCard>
              <FieldLabel>Nombre de usuario</FieldLabel>
              <span style={{ fontSize: "1.05rem", color: "#f8fafc" }}>
                {user?.username || "-"}
              </span>
            </FieldCard>
            <FieldCard>
              <FieldLabel>Nombre</FieldLabel>
              <span style={{ fontSize: "1.05rem", color: "#f8fafc" }}>
                {user?.name || "-"}
              </span>
            </FieldCard>
            <FieldCard>
              <FieldLabel>Apellido</FieldLabel>
              <span style={{ fontSize: "1.05rem", color: "#f8fafc" }}>
                {user?.surname || "-"}
              </span>
            </FieldCard>
            <FieldCard>
              <FieldLabel>Edad</FieldLabel>
              <span style={{ fontSize: "1.05rem", color: "#f8fafc" }}>
                {user?.age || "-"}
              </span>
            </FieldCard>
            <FieldCard>
              <FieldLabel>Email</FieldLabel>
              <span style={{ fontSize: "1.05rem", color: "#f8fafc" }}>
                {user?.email || "-"}
              </span>
            </FieldCard>
            <FieldCard>
              <FieldLabel>Usuario creado</FieldLabel>
              <span style={{ fontSize: "1.05rem", color: "#f8fafc" }}>
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "-"}
              </span>
            </FieldCard>

            <DisplaySelect
              label="Objetivo principal"
              value={user?.objetivoPrincipal || ""}
              options={getOptions("objetivoPrincipal")}
            />
            <DisplaySelect
              label="Nivel de actividad física"
              value={user?.nivelActividad || ""}
              options={getOptions("nivelActividad")}
            />
            <DisplaySelect
              label="Deporte o actividad favorita"
              value={user?.deportes || ""}
              options={getOptions("deportes")}
            />
            <DisplaySelect
              label="Deporte o actividad favorita"
              value={user?.deportes || ""}
              options={getOptions("deportes")}
            />
            <DisplaySelect
              label="Tipo de calzado inteligente de interés"
              value={user?.tipoCalzado || ""}
              options={getOptions("tipoCalzado")}
            />

            <DisplaySelect
              label="Dispositivos de visión tecnológica"
              value={user?.dispositivosVision || ""}
              options={getOptions("dispositivosVision")}
            />

            <DisplaySelect
              label="Ecosistema Fitness avanzado"
              value={user?.ecosistema || ""}
              options={getOptions("ecosistema")}
            />

            <DisplaySelect
              label="Accesorios y relojes"
              value={user?.accesorios || ""}
              options={getOptions("accesorios")}
            />

            <DisplaySelect
              label="Sistema operativo de tu teléfono"
              value={user?.osTelefono || ""}
              options={getOptions("osTelefono")}
            />

            <DisplaySelect
              label="Marcas de preferencia"
              value={user?.marcas || ""}
              options={getOptions("marcas")}
            />
          </ViewContainer>
        )}

        {editing && (
          <div style={{ marginTop: 18 }}>
            <ProfileFormikForm onSaved={() => setEditing(false)} />
          </div>
        )}
      </ProfileSection>
    </main>
  );
}
