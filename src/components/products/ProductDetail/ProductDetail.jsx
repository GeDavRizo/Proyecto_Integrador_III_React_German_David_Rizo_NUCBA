/*
  Archivo: src/components/products/ProductDetail/ProductDetail.jsx
  Descripción: Detalle de producto individual.
*/

import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { products } from "../../../data";
import { addToCart } from "../../../redux/cart/cartSlice";
import { ProductDetailContainer } from "./ProductDetailStyles.js";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <ProductDetailContainer>
        <div className="product-detail-container">
          <div className="product-not-found">
            <h2>Producto no encontrado</h2>
            <button
              onClick={() => navigate("/productos")}
              className="back-button"
            >
              Volver a Productos
            </button>
          </div>
        </div>
      </ProductDetailContainer>
    );
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    alert("¡Producto agregado al carrito!");
  };

  // Obtener productos relacionados (misma categoría)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <ProductDetailContainer>
      <div className="product-detail-container">
        <button onClick={() => navigate("/productos")} className="back-button">
          ← Volver
        </button>

        <div className="product-detail-wrapper">
          {/* Galería de imágenes */}
          <div className="product-gallery">
            <div className="gallery-main">
              <img
                src={product.image}
                alt={product.name}
                className="main-image"
              />
            </div>
          </div>

          {/* Información del producto */}
          <div className="product-info">
            <div className="product-category">{product.category}</div>

            <h1 className="product-name">{product.name}</h1>

            <div className="product-price">
              <span className="price-amount">{product.price}</span>
              <span className="price-currency">{product.currency}</span>
            </div>

            <p className="product-description">{product.description}</p>

            {/* Especificaciones */}
            <div className="product-specs">
              <h3>Especificaciones</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Categoría</span>
                  <span className="spec-value">{product.category}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Precio</span>
                  <span className="spec-value">
                    {product.price} {product.currency}
                  </span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Stock</span>
                  <span className="spec-value">Disponible</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Envío</span>
                  <span className="spec-value">Gratis</span>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="product-actions">
              <button onClick={handleAddToCart} className="btn-add-to-cart">
                Agregar al Carrito
              </button>
              <button className="btn-wishlist">♥ Agregar a favoritos</button>
            </div>

            {/* Info adicional */}
            <div className="product-additional">
              <p>✓ Garantía de 2 años</p>
              <p>✓ Envío gratis a todo el país</p>
              <p>✓ Devolución hasta 30 días</p>
            </div>
          </div>
        </div>

        {/* Productos relacionados */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Productos Relacionados</h2>
            <div className="related-grid">
              {relatedProducts.map((relProduct) => (
                <div key={relProduct.id} className="related-card">
                  <img src={relProduct.image} alt={relProduct.name} />
                  <h4>{relProduct.name}</h4>
                  <p>
                    {relProduct.price} {relProduct.currency}
                  </p>
                  <button
                    onClick={() => navigate(`/productos/${relProduct.id}`)}
                  >
                    Ver Detalles
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ProductDetailContainer>
  );
}
