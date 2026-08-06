/*
  Descripción: Estilos del componente o página Login.
  Funciones:
    - Componente React InputContainerStyled.
    - Componente React LoginInputStyled.
    - Componente React ErrorMessageStyled.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const LoginInputStyled = styled.input`
  width: 100%;
  padding: 12px 14px;
  border-radius: 8px;
  border: 2px solid ${({ isError }) => (isError ? "#f87171" : "#d1d5db")};
  background: #ffffff;
  font-size: 14px;
  color: #111827;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ isError }) => (isError ? "#f87171" : "#6366f1")};
    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const ErrorMessageStyled = styled.span`
  color: #b91c1c;
  font-size: 13px;
  font-weight: 500;
`;
