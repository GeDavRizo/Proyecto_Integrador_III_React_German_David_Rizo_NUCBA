/*
  Descripción: Estilos del componente o página MisOrdenes.
  Funciones:
    - Componente React MisOrdenesContainerStyled.
    - Componente React MisOrdenesTitleStyled.
    - Componente React MisOrdenesBtnContainerStyled.
    - Componente React MisOrdenesPatternStyled.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const MisOrdenesContainerStyled = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 80px 24px 40px;
  min-height: 75vh;
  display: grid;
  gap: 32px;
`;

export const MisOrdenesTitleStyled = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  color: #0f172a;
  margin: 0;
`;

export const MisOrdenesBtnContainerStyled = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const MisOrdenesPatternStyled = styled.img`
  width: 100%;
  max-width: 920px;
  align-self: center;
  justify-self: center;
  opacity: 0.65;
`;
