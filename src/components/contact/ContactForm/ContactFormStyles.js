/*
  Descripción: Estilos del componente o página ContactForm.
  Funciones:
    - Componente React ContactFormContainer.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const ContactFormContainer = styled.div`
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-label {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #6b7280;
  }

  .form-input {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    padding: 14px 18px;
    color: #111827;
    font-family: Inter, system-ui, sans-serif;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
    width: 100%;
  }

  .form-input:focus {
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(167, 139, 250, 0.16);
  }

  .form-input.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  }

  .form-input.success {
    border-color: #22c55e;
  }

  .form-input::placeholder {
    color: #9ca3af;
  }

  .form-textarea {
    resize: vertical;
    min-height: 120px;
  }

  .form-error {
    font-family: Inter, system-ui, sans-serif;
    font-size: 0.85rem;
    color: #ef4444;
    min-height: 20px;
  }

  .form-success {
    background: rgba(34, 197, 94, 0.08);
    border: 1px solid rgba(34, 197, 94, 0.3);
    border-radius: 16px;
    padding: 1rem 1.5rem;
    font-family: Inter, system-ui, sans-serif;
    font-size: 1rem;
    color: #16a34a;
  }

  .form-error-message {
    background: rgba(220, 38, 38, 0.08);
    border: 1px solid rgba(220, 38, 38, 0.3);
    border-radius: 16px;
    padding: 1rem 1.5rem;
    font-family: Inter, system-ui, sans-serif;
    font-size: 1rem;
    color: #dc2626;
    margin-bottom: 1rem;
  }

  .contact-submit-wrap {
    display: flex;
    justify-content: flex-start;
  }
`;
