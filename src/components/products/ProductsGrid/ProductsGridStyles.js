/*
  Archivo: src/components/products/ProductsGrid/ProductsGridStyles.js
  Descripción: Grid de productos.
*/

import styled from "styled-components";

export const ProductsGridContainer = styled.div`
  .products-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    .products-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (min-width: 1200px) {
    .products-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  .products-actions {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .view-more-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;
    padding: 2rem 0;
  }

  .btn-view-more {
    padding: 0.95rem 2.5rem;
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    border: none;
    border-radius: 2rem;
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.25);
  }

  .btn-view-more:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(124, 58, 237, 0.32);
  }

  .btn-view-less {
    background: transparent;
    border: 1px solid rgba(124, 58, 237, 0.55);
    color: #c4b5fd;
    box-shadow: none;
  }

  .btn-view-less:hover {
    background: rgba(124, 58, 237, 0.12);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.16);
  }

  #show-more-btn {
    min-width: 220px;
  }
`;
