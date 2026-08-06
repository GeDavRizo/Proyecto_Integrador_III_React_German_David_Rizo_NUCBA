/*
  Descripción: Estilos del componente o página SuccessModal.
  Funciones:
    - Componente React SuccessModalContainer.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const SuccessModalContainer = styled.div`
  .success-overlay {
    position: fixed;
    inset: 0;
    background: rgba(17, 17, 17, 0.5);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .success-modal {
    background: #f9f9fd;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 32px;
    padding: 2.5rem 2rem;
    max-width: 560px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    text-align: center;
    position: relative;
    box-shadow: 0 35px 100px rgba(15, 23, 42, 0.15);
  }

  .success-modal-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 32px;
    height: 32px;
    background: #f5f5f9;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    color: #6b7280;
    cursor: pointer;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .success-modal-close:hover {
    color: #7c3aed;
    border-color: #c4b5fd;
    background: #ede9fe;
  }

  .success-icon-wrapper {
    position: relative;
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
  }

  .success-ring {
    position: absolute;
    inset: 0;
    border: 2px solid #7c3aed;
    border-radius: 50%;
  }

  .success-check {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: #7c3aed;
  }

  .success-title {
    font-family: "Orbitron", sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #111827;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .success-desc {
    font-family: Inter, system-ui, sans-serif;
    color: #6b7280;
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }

  .purchased-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .purchased-item {
    background: #f8f8fb;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 1rem 1.25rem;
  }

  .purchased-item-inner {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .purchased-item-img {
    width: 64px;
    height: 64px;
    object-fit: contain;
    border-radius: 16px;
    background: rgba(167, 139, 250, 0.18);
    padding: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .purchased-item-info {
    flex: 1;
  }

  .purchased-item-name {
    font-family: "Orbitron", sans-serif;
    font-size: 0.85rem;
    font-weight: 700;
    color: #111827;
  }

  .purchased-item-qty {
    font-family: Inter, system-ui, sans-serif;
    color: #6b7280;
    font-size: 0.85rem;
  }

  .purchased-item-prices {
    text-align: right;
  }

  .purchased-item-subtotal {
    font-family: "Orbitron", sans-serif;
    color: #7c3aed;
    font-weight: 700;
    font-size: 0.9rem;
  }

  .purchased-item-unit {
    font-family: Inter, system-ui, sans-serif;
    color: #9ca3af;
    font-size: 0.75rem;
  }

  .success-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(167, 139, 250, 0.12);
    border: 1px solid rgba(124, 58, 237, 0.16);
    border-radius: 20px;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
  }

  .success-total-label {
    font-family: Inter, system-ui, sans-serif;
    color: #6b7280;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
  }

  .success-total-value {
    font-family: "Orbitron", sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    color: #7c3aed;
  }

  .delivery-msg {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
    text-align: left;
  }

  .delivery-msg p {
    font-family: Inter, system-ui, sans-serif;
    color: #111827;
    font-size: 0.95rem;
  }

  .delivery-msg strong {
    color: #7c3aed;
  }
`;
