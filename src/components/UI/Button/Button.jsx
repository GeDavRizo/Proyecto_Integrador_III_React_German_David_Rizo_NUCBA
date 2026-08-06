/*
  Descripción: Archivo fuente del proyecto Button.
  Funciones:
    - Componente React Button.
    - Componente React Button.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";
// import React from "react"; // Removed unused React import

const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export default function Button({ children, ...props }) {
  return <Btn {...props}>{children}</Btn>;
}
