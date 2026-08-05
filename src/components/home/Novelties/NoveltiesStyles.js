/*
  Archivo: src/components/home/Novelties/NoveltiesStyles.js
  Descripción: Sección de novedades del home.
*/

import styled from "styled-components";

export const NoveltiesContainer = styled.div`
  .section {
    padding: 6rem 1rem;
    position: relative;
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
    color: #22d3ee;
    padding: 0.4rem 1rem;
    border: 1px solid rgba(34, 211, 238, 0.35);
    border-radius: 999px;
    background: rgba(34, 211, 238, 0.08);
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

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .novedades-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .novedades-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .novedades-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .novelty-card {
    background: rgba(15, 23, 42, 0.9);
    border: 1px solid rgba(56, 189, 248, 0.2);
    border-radius: 1.5rem;
    overflow: hidden;
    position: relative;
    transition: all 0.35s ease;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  }

  .novelty-card:hover {
    border-color: rgba(34, 211, 238, 0.75);
    box-shadow: 0 15px 40px rgba(34, 211, 238, 0.15);
    transform: translateY(-4px);
  }

  .novelty-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(34, 211, 238, 0.12);
    border: 1px solid rgba(34, 211, 238, 0.25);
    color: #22d3ee;
    font-family: "Orbitron", sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    padding: 0.35rem 0.75rem;
    border-radius: 999px;
    text-transform: uppercase;
    z-index: 2;
  }

  .novelty-img-wrapper {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    position: relative;
    filter: blur(0.8px);
    opacity: 0.8;
  }

  .novelty-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 1;
  }

  .novelty-lock {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    z-index: 2;
    background: rgba(15, 23, 42, 0.45);
  }

  .novelty-body {
    padding: 1.25rem;
  }

  .novelty-name {
    font-family: "Orbitron", sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: #22d3ee;
    margin-bottom: 0.75rem;
  }

  .novelty-desc {
    font-family: Inter, system-ui, sans-serif;
    font-size: 0.95rem;
    color: #cbd5e1;
    margin-bottom: 0.75rem;
  }

  .novelty-release {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    color: #22d3ee;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    .novedades-grid {
      grid-template-columns: 1fr;
    }
  }
`;
