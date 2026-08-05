/*
  Archivo: src/pages/NotFound/NotFoundStyles.js
  Descripción: Estilos para este componente o página.
*/

import styled from "styled-components";

export const NotFoundContainer = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background:
    radial-gradient(circle at top, rgba(124, 58, 237, 0.15), transparent 22%),
    linear-gradient(180deg, #09090f 0%, #05070f 100%);

  .notfound-card {
    width: min(600px, 100%);
    background: rgba(15, 23, 42, 0.96);
    border: 1px solid rgba(59, 130, 246, 0.18);
    padding: 3rem 2rem;
    border-radius: 1.5rem;
    text-align: center;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
  }

  h1 {
    font-size: 5rem;
    margin: 0;
    color: #60a5fa;
  }

  p {
    color: #cbd5e1;
    margin: 1.5rem 0 2rem;
    font-size: 1.05rem;
  }

  .btn-home {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem 2rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
    color: white;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .btn-home:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.25);
  }
`;
