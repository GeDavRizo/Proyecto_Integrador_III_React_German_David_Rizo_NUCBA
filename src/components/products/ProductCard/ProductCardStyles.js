/*
  Archivo: src/components/products/ProductCard/ProductCardStyles.js
  Descripción: Estilos para este componente o página.
*/

import styled from "styled-components";

export const ProductCardContainer = styled.div`
  .product-card {
    background: rgba(15, 23, 42, 0.95);
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 1.25rem;
    overflow: hidden;
    transition: all 0.35s ease;
    position: relative;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  }

  .product-card:hover {
    border-color: rgba(124, 58, 237, 0.35);
    box-shadow: 0 18px 40px rgba(124, 58, 237, 0.18);
    transform: translateY(-6px);
  }

  .product-card-img-wrapper {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  .product-card-bg {
    position: absolute;
    inset: 0;
    opacity: 0.85;
  }

  .card-grad-1 {
    background: linear-gradient(
      135deg,
      rgba(123, 111, 191, 0.18) 0%,
      rgba(56, 189, 248, 0.12) 100%
    );
  }

  .card-grad-2 {
    background: linear-gradient(
      135deg,
      rgba(34, 211, 238, 0.18) 0%,
      rgba(124, 58, 237, 0.08) 100%
    );
  }

  .card-grad-3 {
    background: linear-gradient(
      135deg,
      rgba(124, 58, 237, 0.18) 0%,
      rgba(59, 130, 246, 0.08) 100%
    );
  }

  .card-grad-4 {
    background: linear-gradient(
      135deg,
      rgba(34, 197, 94, 0.18) 0%,
      rgba(20, 184, 166, 0.08) 100%
    );
  }

  .card-grad-5 {
    background: linear-gradient(
      135deg,
      rgba(219, 39, 119, 0.18) 0%,
      rgba(168, 85, 247, 0.08) 100%
    );
  }

  .card-grad-6 {
    background: linear-gradient(
      135deg,
      rgba(245, 158, 11, 0.18) 0%,
      rgba(251, 191, 36, 0.08) 100%
    );
  }

  .product-card-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 1;
    transition: transform 0.4s ease;
    filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.25));
  }

  .product-card:hover .product-card-img {
    transform: scale(1.08) translateY(-4px);
  }

  .product-card-body {
    padding: 1.25rem;
  }

  .product-card-category {
    font-family: "Orbitron", sans-serif;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 0.6rem;
  }

  .product-card-name {
    font-family: "Orbitron", sans-serif;
    font-size: 0.9rem;
    font-weight: 800;
    color: #7c3aed;
    letter-spacing: 0.05em;
    margin-bottom: 0.75rem;
  }

  .product-card-name-link {
    text-decoration: none;
  }

  .product-card-name-link:hover .product-card-name {
    color: #c4b5fd;
    text-decoration: underline;
  }

  .product-card-desc {
    font-family: Inter, system-ui, sans-serif;
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }

  .product-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .product-card-price {
    font-family: "Orbitron", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: #7c3aed;
  }

  .btn-add-cart {
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: #ffffff;
    border: none;
    padding: 0.85rem 1.35rem;
    border-radius: 1rem;
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
  }

  .btn-add-cart:hover {
    box-shadow: 0 8px 26px rgba(124, 58, 237, 0.25);
    transform: translateY(-2px);
  }

  .btn-add-cart.added {
    background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  }
`;
