/*
  Archivo: src/components/cart/PaymentModal/PaymentModalStyles.js
  Descripción: Modal de pago en el carrito.
*/

import styled from "styled-components";

export const PaymentModalContainer = styled.div`
  .payment-overlay {
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

  .payment-modal {
    background: #f9f9fd;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 32px;
    padding: 2.5rem 2rem;
    max-width: 500px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    text-align: left;
    position: relative;
    box-shadow: 0 35px 100px rgba(15, 23, 42, 0.15);
  }

  .payment-title {
    font-family: "Orbitron", sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: #111827;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .payment-desc {
    font-family: Inter, system-ui, sans-serif;
    color: #6b7280;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  .payment-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .payment-option {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #ffffff;
  }

  .payment-option:hover {
    border-color: #7c3aed;
    background: #f5f3ff;
  }

  .payment-option.selected {
    border-color: #7c3aed;
    background: #f5f3ff;
    box-shadow: 0 0 0 2px rgba(124, 58, 237, 0.12);
  }

  .payment-option input {
    accent-color: #7c3aed;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .payment-option-label {
    font-family: Inter, system-ui, sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: #111827;
    flex: 1;
    cursor: pointer;
  }

  .payment-option-icon {
    font-size: 1.5rem;
  }
`;
