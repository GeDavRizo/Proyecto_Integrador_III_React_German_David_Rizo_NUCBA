/*
  Archivo: src/components/Recomendados/CardsRecomendacionStyles.js
  Descripción: Estilos para este componente o página.
*/

import styled from "styled-components";

export const RecommendedContainer = styled.div`
  .recommended-section {
    padding-top: 2rem;
  }

  .recommended-heading {
    display: flex;
    align-items: end;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.75rem;
  }

  .recommended-grid {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
    padding: 0.25rem 0.25rem 1rem;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-color: rgba(124, 58, 237, 0.7) rgba(148, 163, 184, 0.12);
    scrollbar-width: thin;
  }

  .recommended-card {
    display: grid;
    grid-template-columns: 130px 1fr;
    flex: 0 0 min(360px, 82vw);
    overflow: hidden;
    min-width: 0;
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1rem;
    background: rgba(15, 23, 42, 0.92);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);
    scroll-snap-align: start;
  }

  .recommended-card-image {
    min-height: 180px;
    display: grid;
    place-items: center;
    padding: 0.75rem;
    background: linear-gradient(
      135deg,
      rgba(123, 111, 191, 0.18),
      rgba(46, 184, 191, 0.1)
    );
  }

  .recommended-card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .recommended-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }

  .recommended-card-category {
    margin-bottom: 0.35rem;
    color: #94a3b8;
    font-family: "Orbitron", sans-serif;
    font-size: 0.62rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .recommended-card h3 {
    margin-bottom: 0.5rem;
    color: #f8fafc;
    font-family: "Orbitron", sans-serif;
    font-size: 0.9rem;
  }

  .recommended-card-description {
    margin-bottom: 1rem;
    color: #cbd5e1;
    font-size: 0.85rem;
    line-height: 1.45;
  }

  .recommended-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .recommended-card-footer strong {
    color: #a78bfa;
    font-family: "Orbitron", sans-serif;
    font-size: 0.95rem;
  }

  .recommended-card-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .recommended-card-footer a,
  .recommended-card-btn,
  .recommended-refresh {
    border: 1px solid rgba(124, 58, 237, 0.4);
    border-radius: 0.6rem;
    background: rgba(124, 58, 237, 0.12);
    color: #ddd6fe;
    cursor: pointer;
    font-size: 0.75rem;
    padding: 0.55rem 0.7rem;
    text-decoration: none;
  }

  .recommended-card-btn {
    border: 1px solid rgba(67, 56, 202, 0.55);
    background: rgba(99, 102, 241, 0.16);
    color: #eef2ff;
  }

  .recommended-card-btn:hover,
  .recommended-card-footer a:hover,
  .recommended-refresh:hover {
    background: rgba(124, 58, 237, 0.3);
  }

  .recommended-card-footer a:hover,
  .recommended-refresh:hover {
    background: rgba(124, 58, 237, 0.24);
  }

  @media (max-width: 700px) {
    .recommended-heading {
      align-items: flex-start;
      flex-direction: column;
    }

    .recommended-card {
      flex-basis: min(360px, 88vw);
    }
  }

  @media (max-width: 420px) {
    .recommended-card {
      grid-template-columns: 100px 1fr;
    }

    .recommended-card-image {
      min-height: 160px;
    }
  }
`;
