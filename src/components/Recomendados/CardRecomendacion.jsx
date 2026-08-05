/*
  Archivo: src/components/Recomendados/CardRecomendacion.jsx
  Descripción: Archivo fuente del proyecto.
*/

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils";
import { addToCart } from "../../redux/cart/cartSlice";

export default function CardRecomendacion({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="recommended-card">
      <div className="recommended-card-image">
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
      <div className="recommended-card-body">
        <p className="recommended-card-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="recommended-card-description">
          Una opción destacada para tu próxima experiencia tecnológica.
        </p>
        <div className="recommended-card-footer">
          <strong>{formatPrice(product.price, product.currency)}</strong>
          <div className="recommended-card-actions">
            <Link to={`/productos/${product.id}`}>Ver producto</Link>
            <button
              type="button"
              className="recommended-card-btn"
              onClick={() => dispatch(addToCart(product))}
            >
              + Agregar
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
