/*
  Archivo: src/pages/CheckoutSuccess/CheckoutSuccessStyles.js
  Descripción: Página o componente de checkout.
*/

import styled from "styled-components";

export const CheckoutSuccessContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background:
    radial-gradient(
      circle at top left,
      rgba(124, 58, 237, 0.12),
      transparent 30%
    ),
    linear-gradient(135deg, #09090f 0%, #100e1f 60%, #120d20 100%);
  width: 100%;

  .checkout-success-card {
    background: rgba(15, 23, 42, 0.98);
    padding: 3rem 2rem;
    border-radius: 1.5rem;
    box-shadow: 0 30px 90px rgba(0, 0, 0, 0.35);
    max-width: 640px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
    border: 1px solid rgba(124, 58, 237, 0.25);
  }

  .checkout-success-icon {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
  }

  h1 {
    font-size: 2.5rem;
    color: #7c3aed;
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  .subtitle {
    color: #cbd5e1;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }

  .order-details {
    background: rgba(255, 255, 255, 0.03);
    padding: 1.5rem;
    border-radius: 1rem;
    margin: 2rem 0;
    display: grid;
    gap: 1rem;
  }

  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-radius: 0.95rem;
    background: rgba(255, 255, 255, 0.04);
  }

  .label {
    font-weight: 600;
    color: #cbd5e1;
  }

  .value {
    font-weight: 700;
    color: #f8fafc;
    font-family: monospace;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem 0.75rem;
    border-radius: 0.85rem;
    border: 1px solid rgba(124, 58, 237, 0.18);
  }

  .items-list {
    margin: 2rem 0;
    text-align: left;
  }

  .items-list h3 {
    margin-bottom: 1rem;
    color: #f8fafc;
    font-size: 1.1rem;
  }

  .item-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  .item-row:last-child {
    border-bottom: none;
  }

  .qty {
    color: #94a3b8;
    font-size: 0.95rem;
    min-width: 40px;
    text-align: right;
  }

  .price {
    font-weight: 700;
    color: #7c3aed;
    min-width: 80px;
    text-align: right;
  }

  .success-message {
    background: rgba(124, 58, 237, 0.08);
    padding: 1.5rem;
    border-radius: 1rem;
    margin: 2rem 0;
    border-left: 4px solid #7c3aed;
  }

  .success-message p {
    margin: 0.5rem 0;
    color: #cbd5e1;
  }

  .action-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  .btn-home,
  .btn-shop {
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 999px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    min-width: 180px;
  }

  .btn-home {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    color: white;
  }

  .btn-home:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(124, 58, 237, 0.25);
  }

  .btn-shop {
    background: transparent;
    color: #7c3aed;
    border: 1px solid rgba(124, 58, 237, 0.35);
  }

  .btn-shop:hover {
    background: rgba(124, 58, 237, 0.08);
  }

  @media (max-width: 600px) {
    .checkout-success-card {
      padding: 2rem 1.5rem;
    }

    h1 {
      font-size: 2rem;
    }

    .item-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .action-buttons {
      flex-direction: column;
      width: 100%;
    }

    .btn-home,
    .btn-shop {
      width: 100%;
    }
  }
`;
