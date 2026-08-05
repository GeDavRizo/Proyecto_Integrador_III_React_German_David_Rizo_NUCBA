/*
  Archivo: src/styles/GlobalStyles.js
  Descripción: Estilos para este componente o página.
*/

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-height: 100vh;
    background: #09090f;
    color: #f4f4f8;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::selection {
    background: rgba(123, 111, 191, 0.35);
    color: #ffffff;
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-thumb {
    background: rgba(123, 111, 191, 0.35);
    border-radius: 999px;
  }

  .hidden {
    display: none !important;
  }

  .btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 1.5rem;
    border: none;
    border-radius: 999px;
    background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .btn-primary:hover,
  .btn-primary:focus-visible {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(124, 58, 237, 0.2);
  }

  .btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    padding: 0 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 999px;
    background: transparent;
    color: inherit;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn-ghost:hover,
  .btn-ghost:focus-visible {
    background: rgba(255, 255, 255, 0.06);
  }

  .btn-full {
    width: 100%;
  }

  .text-accent {
    color: #7c3aed;
  }

  .text-accent-2 {
    color: #22d3ee;
  }

  .text-gold {
    color: #facc15;
  }
`;

export default GlobalStyles;
