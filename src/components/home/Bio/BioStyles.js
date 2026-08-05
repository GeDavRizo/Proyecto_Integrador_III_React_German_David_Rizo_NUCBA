/*
  Archivo: src/components/home/Bio/BioStyles.js
  Descripción: Sección de presentación o biografía.
*/

import styled from "styled-components";

export const BioContainer = styled.div`
  .section {
    padding: 6rem 1rem;
    position: relative;
  }

  .container {
    max-width: 1200px;
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
    border: 1px solid rgba(56, 189, 248, 0.35);
    border-radius: 999px;
    background: rgba(56, 189, 248, 0.08);
  }

  .bio-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    align-items: center;
    margin-top: 3rem;
  }

  .bio-text-title {
    font-family: "Orbitron", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.3;
    color: #f8fafc;
  }

  .bio-text {
    color: #cbd5e1;
    font-family: Inter, system-ui, sans-serif;
  }

  .bio-text p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .bio-text strong {
    color: #7c3aed;
  }

  .highlight-purple {
    color: #22d3ee;
  }

  .bio-cards-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .bio-card {
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(123, 111, 191, 0.16);
    border-radius: 1rem;
    padding: 1.5rem;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  }

  .bio-card:hover {
    border-color: rgba(124, 58, 237, 0.5);
    box-shadow: 0 15px 40px rgba(124, 58, 237, 0.18);
    transform: translateY(-4px);
  }

  .bio-card-icon {
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    color: #7c3aed;
  }

  .bio-card h3,
  .bio-card h3.text-accent,
  .bio-card h3.text-accent-2 {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }

  .bio-card p {
    font-family: Inter, system-ui, sans-serif;
    color: #cbd5e1;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .bio-cards-grid {
      grid-template-columns: 1fr;
    }
  }
`;
