/*
  Descripción: Archivo fuente del proyecto CardsRecomendacion.
  Funciones:
    - Componente React CardsRecomendacion.
    - Componente React CardsRecomendacion.
  Requiere:
    - Módulos locales del proyecto
    - React Redux
*/

import { useDispatch, useSelector } from "react-redux";
import CardRecomendacion from "./CardRecomendacion";
import {
  randomRecommended,
  selectRecommended,
} from "../../redux/recommended/recommendedSlices";
import { RecommendedContainer } from "./CardsRecomendacionStyles";

export default function CardsRecomendacion() {
  const dispatch = useDispatch();
  const recommended = useSelector(selectRecommended);

  return (
    <RecommendedContainer>
      <section id="recomendados" className="section recommended-section">
        <div className="container">
          <div className="section-tag">Selección W-TECH</div>
          <div className="recommended-heading">
            <div>
              <h2 className="section-title">
                Recomendados <span className="text-accent">de hoy</span>
              </h2>
              <p className="section-desc">
                Descubrí seis productos destacados para llevar tu experiencia al
                próximo nivel.
              </p>
            </div>
            <button
              type="button"
              className="recommended-refresh"
              onClick={() => dispatch(randomRecommended())}
            >
              Ver otra selección
            </button>
          </div>
          <div className="recommended-grid">
            {recommended.map((product) => (
              <CardRecomendacion key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </RecommendedContainer>
  );
}
