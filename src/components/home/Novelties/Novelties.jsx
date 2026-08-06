/*
  Descripción: Archivo fuente del proyecto Novelties.
  Funciones:
    - Componente React Novelties.
  Requiere:
    - Módulos locales del proyecto
*/

import { novelties } from "../../../data";
import { NoveltiesContainer } from "./NoveltiesStyles.js";

function Novelties() {
  return (
    <NoveltiesContainer>
      <section id="novedades" className="section">
        <div className="container">
          <div className="section-tag gold">Próximamente</div>
          <h2 className="section-title">
            Lo que <span className="text-gold">viene</span>
          </h2>
          <p className="section-desc">
            El futuro ya está en desarrollo. Sé el primero en saberlo.
          </p>
          <div id="novedades-grid" className="novedades-grid">
            {novelties.map((item) => (
              <div key={item.id} className="novelty-card">
                <span className="novelty-badge">🔒 Próximamente</span>
                <div className="novelty-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="novelty-img"
                    loading="lazy"
                    onError={(e) =>
                      (e.target.src =
                        "https://placehold.co/200x160/e8e8e8/7B6FBF?text=Coming+Soon")
                    }
                  />
                  <div className="novelty-lock">🔐</div>
                </div>
                <div className="novelty-body">
                  <h3 className="novelty-name">{item.name}</h3>
                  <p className="novelty-desc">{item.description}</p>
                  <p className="novelty-release">
                    Lanzamiento: {item.releaseDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>{" "}
    </NoveltiesContainer>
  );
}

export default Novelties;
