/*
  Archivo: src/pages/NotFound/NotFound.jsx
  Descripción: Página React de la aplicación.
*/

import { useNavigate } from "react-router-dom";
import { NotFoundContainer } from "./NotFoundStyles.js";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <div className="notfound-card">
        <h1>404</h1>
        <p>La página que buscas no existe.</p>
        <button onClick={() => navigate("/")} className="btn-home">
          Volver al inicio
        </button>
      </div>
    </NotFoundContainer>
  );
}
