/*
  Archivo: src/components/layout/Navbar/NavbarStyles.js
  Descripción: Barra de navegación principal.
*/

import styled from "styled-components";

export const NavbarContainer = styled.header`
  position: fixed;
  inset: 0 auto auto 0;
  width: 100%;
  z-index: 99;
  background: rgba(8, 8, 16, 0.96);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }

  .logo {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    color: white;
  }

  .logo-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
  }

  .logo-text {
    font-family: "Orbitron", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.2em;
  }

  .nav-links {
    display: none;
    gap: 1.5rem;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media (min-width: 860px) {
    .nav-links {
      display: flex;
    }
  }

  .nav-link {
    color: #dbeafe;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 600;
    transition: color 0.2s ease;
  }

  .nav-link:hover,
  .nav-link.active,
  .nav-link.visited {
    color: #60a5fa;
    text-shadow: 0 0 18px rgba(96, 165, 250, 0.25);
  }

  .mobile-nav-link:hover,
  .mobile-nav-link.active,
  .mobile-nav-link.visited {
    color: #60a5fa;
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .cart-btn {
    position: relative;
    width: 44px;
    height: 44px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.05);
    color: #dbeafe;
    border-radius: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .cart-btn:hover {
    border-color: rgba(124, 58, 237, 0.5);
    background: rgba(124, 58, 237, 0.12);
  }

  .cart-badge {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    border-radius: 999px;
    background: #7c3aed;
    color: white;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .user-menu {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .auth-links {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .auth-btn {
    padding: 0.5rem 1rem;
    border: 1px solid rgba(124, 58, 237, 0.25);
    background: rgba(124, 58, 237, 0.1);
    color: #dbeafe;
    text-decoration: none;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .auth-btn:hover {
    background: rgba(124, 58, 237, 0.2);
  }

  .auth-btn.primary {
    background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%);
    color: white;
    border: none;
  }

  .logout-btn {
    padding: 0.5rem 1rem;
    background: transparent;
    border: 1px solid #f87171;
    color: #f87171;
    border-radius: 12px;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .logout-btn:hover {
    background: rgba(248, 113, 113, 0.12);
  }

  #hamburger {
    width: 44px;
    height: 44px;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    padding: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.14);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 14px;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .hamburger-line {
    width: 100%;
    height: 3px;
    border-radius: 999px;
    background: #dbeafe;
    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  #hamburger.open .hamburger-line:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  #hamburger.open .hamburger-line:nth-child(2) {
    opacity: 0;
  }

  #hamburger.open .hamburger-line:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .mobile-menu {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    width: 100%;
    min-height: calc(100vh - 72px);
    background: rgba(8, 8, 16, 0.96);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(18px);
    padding: 1rem 1.5rem 1.5rem;
    z-index: 90;
  }

  .mobile-menu.hidden {
    display: none;
  }

  @media (min-width: 860px) {
    #hamburger {
      display: none;
    }

    .mobile-menu {
      display: none !important;
    }
  }

  .mobile-nav-link {
    display: block;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: #dbeafe;
    font-size: 0.95rem;
    text-decoration: none;
  }
`;
