/*
  Archivo: src/components/layout/WhatsAppFloat/WhatsAppFloatStyles.js
  Descripción: Layout principal de la aplicación.
*/

import styled from "styled-components";

export const WhatsAppFloatContainer = styled.div`
  .whatsapp-float {
    position: fixed;
    width: 55px;
    height: 55px;
    bottom: 30px;
    right: 30px;
    background-color: #25d366;
    color: #fff;
    border-radius: 999px;
    text-align: center;
    font-size: 30px;
    box-shadow: 0 15px 40px rgba(37, 211, 102, 0.25);
    z-index: 150;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .whatsapp-float:hover {
    transform: scale(1.08);
    box-shadow: 0 18px 45px rgba(37, 211, 102, 0.35);
    color: white;
  }
`;
