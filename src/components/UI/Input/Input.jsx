/*
  Descripción: Archivo fuente del proyecto Input.
  Funciones:
    - Componente React Input.
    - Componente React Input.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";
// import React from "react"; // unused with new JSX runtime

const InputStyled = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  background: #fff;
`;

export default function Input(props) {
  return <InputStyled {...props} />;
}
