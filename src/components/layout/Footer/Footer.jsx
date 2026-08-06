/*
  Descripción: Archivo fuente del proyecto Footer.
  Funciones:
    - Componente React Footer.
  Requiere:
    - Módulos locales del proyecto
    - React Router
*/

import { Link } from "react-router-dom";
import { FooterContainer } from "./FooterStyles.js";

// Footer con enlaces rápidos, marcas y créditos del proyecto.
function Footer() {
  return (
    <FooterContainer>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <span className="footer-brand-text">W-TECH</span>
              <p className="footer-brand-desc">
                Wearables inteligentes para la próxima generación. Tecnología
                que se lleva puesta.
              </p>
            </div>

            <div>
              <h4 className="footer-nav-title">Navegación</h4>
              <div className="footer-links">
                <Link to="/#bio" className="footer-link">
                  Bio
                </Link>
                <Link to="/#productos" className="footer-link">
                  Productos
                </Link>
                <Link to="/#novedades" className="footer-link">
                  Novedades
                </Link>
                <Link to="/contacto" className="footer-link">
                  Contacto
                </Link>
              </div>
            </div>

            <div>
              <h4 className="footer-nav-title">Pagos aceptados</h4>
              <div className="pay-badges">
                <span className="pay-badge">eTH</span>
                <span className="pay-badge">BTC</span>
                <span className="pay-badge">USDT</span>
                <span className="pay-badge">💳 Virtual</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 W-Tech. Todos los derechos reservados.</p>
            <p className="footer-credit">Hecho con ❤️ por GeDav Full Stack</p>
            <p>Proyecto Integrador III — REACT — NUCBA Fullstack</p>
          </div>
        </div>
      </footer>{" "}
    </FooterContainer>
  );
}

export default Footer;
