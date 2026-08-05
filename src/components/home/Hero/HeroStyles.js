/*
  Archivo: src/components/home/Hero/HeroStyles.js
  Descripción: Sección hero de la página principal.
*/

import styled from "styled-components";

export const HeroContainer = styled.div`
  .hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-top: 80px;
    background-color: #09090f;
  }

  .hero-bg {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        ellipse at 20% 60%,
        rgba(123, 111, 191, 0.09) 0%,
        transparent 55%
      ),
      radial-gradient(
        ellipse at 80% 30%,
        rgba(46, 184, 191, 0.07) 0%,
        transparent 55%
      ),
      radial-gradient(
        ellipse at 50% 100%,
        rgba(123, 111, 191, 0.05) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  .hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    opacity: 0.7;
    mask-image: radial-gradient(ellipse at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(
      ellipse at center,
      black 30%,
      transparent 75%
    );
  }

  .hero-content {
    position: relative;
    z-index: 10;
    text-align: center;
    padding: 0 1rem;
    max-width: 900px;
    margin: 0 auto;
  }

  .hero-subtitle {
    font-family: Inter, system-ui, sans-serif;
    color: #a78bfa;
    letter-spacing: 0.4em;
    font-size: 0.875rem;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .hero-title {
    font-family: "Orbitron", sans-serif;
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: #f8fafc;
  }

  .text-gradient {
    background: linear-gradient(135deg, #7c3aed, #22d3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-desc {
    font-family: Inter, system-ui, sans-serif;
    font-size: 1.15rem;
    color: #cbd5e1;
    max-width: 640px;
    margin: 0 auto 2.5rem;
    line-height: 1.7;
  }

  .hero-cta {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .hero-social-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid rgba(124, 58, 237, 0.3);
    background: rgba(167, 139, 250, 0.12);
    color: #7c3aed;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .hero-social-btn:hover {
    background: #7c3aed;
    color: #fff;
    border-color: #7c3aed;
    box-shadow: 0 4px 20px rgba(124, 58, 237, 0.25);
    transform: translateY(-2px);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .scroll-dot {
    width: 6px;
    height: 6px;
    background: #7c3aed;
    border-radius: 50%;
    margin: 0 auto;
  }
`;
