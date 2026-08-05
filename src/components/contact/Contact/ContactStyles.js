/*
  Archivo: src/components/contact/Contact/ContactStyles.js
  Descripción: Sección de contacto.
*/

import styled from "styled-components";

export const ContactContainer = styled.div`
  .section {
    padding: 6rem 1rem;
    position: relative;
  }

  .section-line-top {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 80px;
    background: rgba(148, 163, 184, 0.35);
  }

  .container {
    max-width: 720px;
    margin: 0 auto;
  }

  .section-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: #7c3aed;
    padding: 0.4rem 1rem;
    border: 1px solid rgba(124, 58, 237, 0.25);
    border-radius: 999px;
    background: rgba(124, 58, 237, 0.08);
  }

  .section-title {
    font-family: "Orbitron", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #f8fafc;
  }

  .section-desc {
    font-family: Inter, system-ui, sans-serif;
    color: #cbd5e1;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
  }
`;
