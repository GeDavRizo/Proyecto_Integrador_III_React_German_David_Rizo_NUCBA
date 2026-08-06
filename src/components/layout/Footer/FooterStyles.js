/*
  Descripción: Estilos del componente o página Footer.
  Funciones:
    - Componente React FooterContainer.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const FooterContainer = styled.div`
  .footer {
    background: rgba(15, 23, 42, 0.95);
    border-top: 1px solid rgba(148, 163, 184, 0.12);
    padding: 3rem 1rem;
    color: #cbd5e1;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-brand-text {
    font-family: "Orbitron", sans-serif;
    font-size: 1.25rem;
    font-weight: 900;
    color: #7c3aed;
    letter-spacing: 0.2em;
  }

  .footer-brand-desc {
    font-family: Inter, system-ui, sans-serif;
    color: #94a3b8;
    margin-top: 0.75rem;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .footer-nav-title {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    color: #94a3b8;
    letter-spacing: 0.2em;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .footer-link {
    font-family: Inter, system-ui, sans-serif;
    font-size: 0.95rem;
    color: #cbd5e1;
    transition: color 0.2s ease;
    display: block;
  }

  .footer-link:hover {
    color: #7c3aed;
  }

  .pay-badges {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .pay-badge {
    font-family: "Orbitron", sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.5rem 0.85rem;
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 999px;
    color: #cbd5e1;
    background: rgba(30, 41, 59, 0.7);
    letter-spacing: 0.05em;
  }

  .footer-bottom {
    border-top: 1px solid rgba(148, 163, 184, 0.12);
    padding-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .footer-bottom p {
    font-family: Inter, system-ui, sans-serif;
    color: #94a3b8;
    font-size: 0.9rem;
    margin: 0;
  }

  .footer-credit {
    color: #7c3aed !important;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    .footer-grid {
      grid-template-columns: 1fr;
    }
  }
`;
