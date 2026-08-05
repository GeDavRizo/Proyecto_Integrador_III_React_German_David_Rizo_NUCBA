/*
  Archivo: src/components/home/Bio/Bio.jsx
  Descripción: Sección de presentación o biografía.
*/

import { motion } from "framer-motion";
import {
  BiSolidZap,
  BiLink,
  BiPalette,
  BiShieldQuarter,
  BiHome,
} from "react-icons/bi";
import { BioContainer } from "./BioStyles.js";

function Bio() {
  return (
    <BioContainer>
      <motion.section
        id="bio"
        className="section"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.div
            className="section-tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <BiHome
              size={16}
              style={{ marginRight: "8px", display: "inline" }}
            />
            Sobre Nosotros
          </motion.div>
          <div className="bio-grid">
            <motion.div
              className="bio-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="bio-text-title">
                El futuro no se espera.
                <br />
                <span className="text-accent">Se viste.</span>
              </h2>
              <p>
                <strong>W-Tech</strong> nació de una visión simple pero
                poderosa: la tecnología no debería estar en tu bolsillo, sino
                integrada en tu cuerpo. Somos una marca de vanguardia
                especializada en —
                <strong className="highlight-purple">
                  wearables inteligentes
                </strong>
                — dispositivos diseñados para fusionarse de forma natural con tu
                ropa, calzado y accesorios cotidianos.
              </p>
              <p>
                Los wearables son la próxima evolución digital: monitorizan tu
                salud, potencian tu rendimiento y te conectan con el mundo
                mientras los llevás puesto. Desde zapatillas con sensores
                biométricos hasta lentes con realidad aumentada, cubrimos cada
                parte de tu cuerpo con inteligencia.
              </p>
            </motion.div>

            <div className="bio-cards-grid">
              <motion.div
                className="bio-card"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bio-card-icon">
                  <BiSolidZap size={24} />
                </div>
                <h3 className="text-accent">INNOVACIÓN</h3>
                <p>Tecnología de punta en cada producto que diseñamos.</p>
              </motion.div>

              <motion.div
                className="bio-card"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="bio-card-icon">
                  <BiLink size={24} />
                </div>
                <h3 className="text-accent-2">CONECTIVIDAD</h3>
                <p>Ecosistema integrado entre todos tus dispositivos.</p>
              </motion.div>

              <motion.div
                className="bio-card"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <div className="bio-card-icon">
                  <BiPalette size={24} />
                </div>
                <h3 className="text-accent">DISEÑO</h3>
                <p>Estética futurista sin renunciar a la comodidad.</p>
              </motion.div>

              <motion.div
                className="bio-card"
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="bio-card-icon">
                  <BiShieldQuarter size={24} />
                </div>
                <h3 className="text-accent-2">SEGURIDAD</h3>
                <p>Pagos con criptomonedas y billetera virtual segura.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>{" "}
    </BioContainer>
  );
}

export default Bio;
