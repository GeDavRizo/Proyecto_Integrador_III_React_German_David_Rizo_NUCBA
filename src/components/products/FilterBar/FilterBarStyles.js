/*
  Descripción: Estilos del componente o página FilterBar.
  Funciones:
    - Componente React FilterBarContainer.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const FilterBarContainer = styled.div`
  .filters-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }

  .filter-btn {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 0.55rem 1.2rem;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.04);
    color: #cbd5e1;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 8px 18px rgba(15, 23, 42, 0.08);
  }

  .filter-btn:hover,
  .filter-btn.active {
    background: rgba(124, 58, 237, 0.13);
    border-color: #7c3aed;
    color: #7c3aed;
    box-shadow: 0 12px 24px rgba(124, 58, 237, 0.1);
  }
`;
