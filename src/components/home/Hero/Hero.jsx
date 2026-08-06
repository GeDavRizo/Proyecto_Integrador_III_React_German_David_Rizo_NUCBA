/*
  Descripción: Archivo fuente del proyecto Hero.
  Funciones:
    - Componente React Hero.
  Requiere:
    - Framer Motion para animaciones
    - Módulos locales del proyecto
    - react-icons
*/

import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { HeroContainer } from "./HeroStyles.js"

function Hero() {
  return (
    <HeroContainer>
    <motion.section
      id="hero"
      className="hero-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="hero-content">
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Tecnología que se lleva puesta
        </motion.p>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          VISTE
          <br />
          <span className="text-gradient">EL FUTURO</span>
        </motion.h1>
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Wearables de última generación que fusionan estilo, tecnología y
          performance. Tu cuerpo, conectado.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <motion.a
            href="#productos"
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.92 }}
          >
            EXPLORAR PRODUCTOS
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hero-social-btn"
            aria-label="Instagram"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiInstagram size={20} />
          </motion.a>
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </motion.section>    </HeroContainer>
  );
}

export default Hero;