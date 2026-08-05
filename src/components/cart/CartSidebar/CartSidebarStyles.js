/*
  Archivo: src/components/cart/CartSidebar/CartSidebarStyles.js
  Descripción: Lógica del carrito de compras.
*/

import styled from "styled-components";

export const CartSidebarContainer = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  pointer-events: none;

  .cart-overlay,
  .cart-sidebar {
    pointer-events: auto;
  }

  .cart-overlay {
    position: fixed;
    inset: 0;
    background: rgba(17, 17, 17, 0.35);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 100;
  }

  .cart-overlay.hidden {
    display: none;
  }

  .cart-sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(400px, 100vw);
    background: #f9f9fd;
    border-left: 1px solid rgba(0, 0, 0, 0.08);
    z-index: 101;
    transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    box-shadow: -8px 0 40px rgba(123, 111, 191, 0.15);
  }

  .cart-sidebar.open {
    transform: translateX(0);
  }

  .cart-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .cart-header-title {
    font-family: "Orbitron", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    color: #6f46c1;
    letter-spacing: 0.15em;
  }

  .cart-close-btn {
    background: #f5f5f9;
    border: 1px solid rgba(0, 0, 0, 0.08);
    color: #6b7280;
    width: 32px;
    height: 32px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-close-btn:hover {
    color: #6f46c1;
    border-color: #c4b5fd;
    background: #ede9fe;
  }

  .cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 1rem 1.5rem;
  }

  .cart-empty {
    text-align: center;
    padding: 3rem 1rem;
    color: #6b7280;
    font-family: Inter, system-ui, sans-serif;
    font-size: 1rem;
  }

  .cart-item {
    display: flex;
    align-items: stretch;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .cart-item-img {
    width: 56px;
    height: 56px;
    object-fit: contain;
    background: rgba(167, 139, 250, 0.18);
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    padding: 6px;
  }

  .cart-item-info {
    flex: 1;
  }

  .cart-item-name {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    color: #111827;
    letter-spacing: 0.04em;
    margin-bottom: 4px;
  }

  .cart-item-price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .cart-item-price {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    color: #7c3aed;
    font-weight: 700;
  }

  .cart-qty-controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .cart-qty-btn {
    width: 26px;
    height: 26px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background: #f8f8fb;
    color: #374151;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .cart-qty-btn:hover {
    border-color: #7c3aed;
    color: #7c3aed;
    background: #f3e8ff;
  }

  .cart-qty-num {
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    min-width: 20px;
    text-align: center;
    color: #111827;
  }

  .cart-remove-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: #6b7280;
    cursor: pointer;
    font-size: 1rem;
    padding: 4px;
    border-radius: 4px;
    transition: color 0.2s ease;
  }

  .cart-remove-btn:hover {
    color: #ef4444;
  }

  .cart-summary {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    background: #fff;
    min-height: 140px;
  }

  .cart-summary-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
    font-size: 0.95rem;
    color: #374151;
  }

  .cart-summary-row.total-row {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    font-size: 1.15rem;
    font-weight: 800;
    color: #5b21b6;
  }

  .cart-summary-divider {
    width: 100%;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
    margin: 1rem 0;
    border: none;
  }

  .cart-footer {
    padding: 1.25rem 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    background: #f8f8fb;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  .cart-footer .btn-primary {
    width: 100%;
  }

  .cart-total {
    display: none;
  }

  .cart-total-label {
    font-family: Inter, system-ui, sans-serif;
    color: #6b7280;
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  .cart-total-value {
    font-family: "Orbitron", sans-serif;
    font-size: 1.25rem;
    color: #7c3aed;
    font-weight: 700;
  }
`;
