/*
  Archivo: src/components/products/ProductDetail/ProductDetailStyles.js
  Descripción: Detalle de producto individual.
*/

import styled from "styled-components";

export const ProductDetailContainer = styled.div`
  .product-detail-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    min-height: 70vh;
    color: #e2e8f0;
  }

  .product-not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(124, 58, 237, 0.2);
    border-radius: 1.25rem;
    padding: 2rem;
    text-align: center;
  }

  .product-not-found h2 {
    color: #f8fafc;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  .product-not-found button {
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    border: none;
    border-radius: 1rem;
    padding: 0.9rem 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .product-not-found button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.2);
  }

  .back-button {
    background: transparent;
    border: none;
    color: #7c3aed;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: color 0.3s ease;
  }

  .back-button:hover {
    color: #c4b5fd;
    text-decoration: underline;
  }

  .product-detail-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
  }

  .product-gallery {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .gallery-main {
    border: 2px solid rgba(124, 58, 237, 0.2);
    border-radius: 1rem;
    overflow: hidden;
    background: rgba(15, 23, 42, 0.9);
    padding: 2rem;
  }

  .main-image {
    width: 100%;
    height: 400px;
    object-fit: contain;
    display: block;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .product-category {
    display: inline-block;
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    width: fit-content;
  }

  .product-name {
    font-size: 2.5rem;
    font-weight: 700;
    color: #f8fafc;
    font-family: "Orbitron", sans-serif;
  }

  .product-price {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
  }

  .price-amount {
    font-size: 2rem;
    font-weight: 700;
    color: #7c3aed;
  }

  .price-currency {
    font-size: 1.2rem;
    font-weight: 600;
    color: #7c3aed;
  }

  .product-description {
    font-size: 1rem;
    line-height: 1.6;
    color: #cbd5e1;
  }

  .product-specs {
    border-top: 2px solid rgba(71, 85, 105, 0.45);
    border-bottom: 2px solid rgba(71, 85, 105, 0.45);
    padding: 1.5rem 0;
  }

  .product-specs h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #f8fafc;
  }

  .specs-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .spec-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .spec-label {
    font-size: 0.85rem;
    color: #94a3b8;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
  }

  .spec-value {
    font-size: 1rem;
    font-weight: 600;
    color: #f8fafc;
    text-transform: capitalize;
  }

  .product-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .btn-add-to-cart,
  .btn-wishlist {
    padding: 1rem;
    border-radius: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    text-transform: uppercase;
  }

  .btn-add-to-cart {
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
  }

  .btn-add-to-cart:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(124, 58, 237, 0.25);
  }

  .btn-wishlist {
    background: rgba(255, 255, 255, 0.05);
    color: #7c3aed;
    border: 2px solid rgba(124, 58, 237, 0.25);
  }

  .btn-wishlist:hover {
    background: rgba(124, 58, 237, 0.12);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.18);
  }

  .product-additional {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 1.5rem;
    background: rgba(15, 23, 42, 0.85);
    border-radius: 1rem;
    border-left: 4px solid #7c3aed;
  }

  .product-additional p {
    font-size: 0.95rem;
    color: #cbd5e1;
  }

  .related-products {
    margin-top: 4rem;
    padding-top: 2rem;
    border-top: 2px solid rgba(71, 85, 105, 0.45);
  }

  .related-products h2 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #f8fafc;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .related-card {
    border: 2px solid rgba(124, 58, 237, 0.2);
    border-radius: 1rem;
    padding: 1.5rem;
    text-align: center;
    transition: all 0.3s ease;
    background: rgba(15, 23, 42, 0.9);
  }

  .related-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(124, 58, 237, 0.18);
  }

  .related-card img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 1rem;
    border-radius: 0.8rem;
    background: rgba(255, 255, 255, 0.04);
  }

  .related-card h4 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #f8fafc;
  }

  .related-card p {
    color: #7c3aed;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .related-card button {
    padding: 0.75rem 1.25rem;
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: white;
    border: none;
    border-radius: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .related-card button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(124, 58, 237, 0.2);
  }

  @media (max-width: 768px) {
    .product-detail-wrapper {
      grid-template-columns: 1fr;
    }

    .main-image {
      height: auto;
    }
  }
`;
