/*
  Descripción: Estilos del componente o página Checkout.
  Funciones:
    - Componente React CheckoutContainer.
  Requiere:
    - styled-components para estilos
*/

import styled from "styled-components";

export const CheckoutContainer = styled.div`
  .checkout-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    min-height: 80vh;
    background: #0b1220;
    color: #e2e8f0;
  }

  .empty-checkout {
    text-align: center;
    padding: 4rem 2rem;
  }

  .empty-checkout h2 {
    font-size: 2rem;
    color: #f8fafc;
    margin-bottom: 1rem;
  }

  .empty-checkout p {
    color: #94a3b8;
    margin-bottom: 2rem;
  }

  .btn-continue {
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    border: none;
    border-radius: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-continue:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);
  }

  .checkout-wrapper {
    display: flex;
    flex-direction: column;
  }

  .checkout-progress {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
  }

  .progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .step-number {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border: 2px solid #475569;
    color: #94a3b8;
    background: #020617;
    transition: all 0.3s ease;
  }

  .progress-step.active .step-number {
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    border-color: #7c3aed;
  }

  .progress-step span {
    font-size: 0.85rem;
    color: #94a3b8;
    font-weight: 600;
    transition: color 0.3s ease;
  }

  .progress-step.active span {
    color: #7c3aed;
  }

  .progress-line {
    width: 60px;
    height: 2px;
    background: #475569;
    transition: background 0.3s ease;
  }

  .progress-line.active {
    background: #7c3aed;
  }

  .checkout-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .checkout-form {
    display: flex;
    flex-direction: column;
  }

  .form-section {
    background: rgba(15, 23, 42, 0.9);
    padding: 2rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(71, 85, 105, 0.25);
  }

  .form-section h2,
  .form-section h3 {
    color: #f8fafc;
  }

  .form-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .form-section h3 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .form-group label {
    font-weight: 600;
    color: #cbd5e1;
    font-size: 0.9rem;
  }

  .form-group input {
    padding: 0.9rem;
    border: 1px solid rgba(71, 85, 105, 0.7);
    border-radius: 0.85rem;
    font-size: 0.95rem;
    font-family: Inter, system-ui, sans-serif;
    background: #020617;
    color: #f8fafc;
    transition: all 0.3s ease;
  }

  .form-group input:focus {
    outline: none;
    border-color: #7c3aed;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
    background: #050816;
  }

  .form-group input::placeholder {
    color: #94a3b8;
  }

  .form-group.checkbox {
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1rem;
  }

  .form-group.checkbox input {
    width: 20px;
    height: 20px;
    margin: 0;
    cursor: pointer;
  }

  .form-group.checkbox label {
    margin: 0;
    font-size: 0.9rem;
    cursor: pointer;
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: space-between;
  }

  .btn-cancel,
  .btn-back {
    padding: 0.85rem 1.5rem;
    background: transparent;
    border: 2px solid rgba(71, 85, 105, 0.7);
    color: #94a3b8;
    border-radius: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-cancel:hover,
  .btn-back:hover {
    border-color: #7c3aed;
    color: #7c3aed;
    background: rgba(124, 58, 237, 0.08);
  }

  .btn-next,
  .btn-place-order {
    padding: 0.85rem 1.5rem;
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    border: none;
    border-radius: 0.85rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-next:hover,
  .btn-place-order:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.25);
  }

  .btn-place-order:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
  }

  .form-section.confirmation {
    text-align: center;
  }

  .confirmation-section {
    background: rgba(15, 23, 42, 0.85);
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 0.95rem;
    border-left: 4px solid #7c3aed;
    text-align: left;
  }

  .confirmation-section h3 {
    margin-bottom: 1rem;
  }

  .confirmation-section p {
    color: #cbd5e1;
    margin: 0.25rem 0;
  }

  .order-summary {
    background: rgba(15, 23, 42, 0.9);
    padding: 2rem;
    border-radius: 1.25rem;
    border: 1px solid rgba(124, 58, 237, 0.2);
    height: fit-content;
    position: sticky;
    top: 100px;
  }

  .order-summary h2 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    color: #7c3aed;
  }

  .summary-items {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .summary-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 0.85rem;
    font-size: 0.95rem;
  }

  .summary-item-image {
    width: 46px;
    height: 46px;
    object-fit: contain;
    border-radius: 0.75rem;
    background: rgba(124, 58, 237, 0.15);
    padding: 0.35rem;
  }

  .item-info {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex: 1;
  }

  .item-name {
    font-weight: 600;
    color: #f8fafc;
  }

  .item-quantity {
    color: #94a3b8;
    font-size: 0.85rem;
  }

  .item-price {
    font-weight: 700;
    color: #7c3aed;
  }

  .summary-divider {
    height: 1px;
    background: rgba(124, 58, 237, 0.2);
    margin: 1rem 0;
  }

  .summary-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    font-size: 0.95rem;
    color: #cbd5e1;
  }

  .summary-row span:last-child {
    font-weight: 600;
    color: #cbd5e1;
  }

  .summary-row.free span:last-child {
    color: #22c55e;
  }

  .summary-row.total {
    font-size: 1.15rem;
    font-weight: 700;
    color: #7c3aed;
    margin-top: 0.5rem;
  }

  .summary-row.total span:last-child {
    color: #7c3aed;
  }

  .summary-info {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(124, 58, 237, 0.15);
    font-size: 0.9rem;
    color: #94a3b8;
  }

  .summary-info p {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    .checkout-content {
      grid-template-columns: 1fr;
    }

    .order-summary {
      position: static;
      top: auto;
    }

    .form-section {
      padding: 1.5rem;
    }

    .checkout-progress {
      gap: 0.5rem;
      margin-bottom: 2rem;
    }

    .progress-line {
      width: 30px;
    }

    .step-number {
      width: 35px;
      height: 35px;
      font-size: 0.85rem;
    }

    .progress-step span {
      display: none;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .form-actions {
      flex-direction: column;
    }

    .btn-next,
    .btn-cancel,
    .btn-back,
    .btn-place-order {
      width: 100%;
    }
  }
`;
