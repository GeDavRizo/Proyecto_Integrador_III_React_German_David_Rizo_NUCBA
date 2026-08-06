/*
  Descripción: Tarjeta que muestra los datos de un producto en la lista de productos.
  Funciones:
    - Componente React ProductCard.
  Requiere:
    - Framer Motion para animaciones
    - Módulos locales del proyecto
    - React Redux
    - React Router
*/

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartSlice";
import { ProductCardContainer } from "./ProductCardStyles.js";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <ProductCardContainer>
      <motion.div
        className="product-card"
        data-id={product.id}
        data-category={product.category}
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.25 }}
      >
        <div className="product-card-img-wrapper">
          <div className={`product-card-bg ${product.gradient}`}></div>
          <img
            src={product.image}
            alt={product.name}
            className="product-card-img"
            loading="lazy"
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/200x160/e8e8e8/7B6FBF?text=W-Tech")
            }
          />
        </div>
        <div className="product-card-body">
          <p className="product-card-category">{product.category}</p>
          <Link
            to={`/productos/${product.id}`}
            className="product-card-name-link"
          >
            <h3 className="product-card-name">{product.name}</h3>
          </Link>
          <p className="product-card-desc">{product.description}</p>
          <div className="product-card-footer">
            <span className="product-card-price">
              {product.price.toFixed(2)} {product.currency}
            </span>
            <motion.button
              className="btn-add-cart"
              data-id={product.id}
              aria-label={`Agregar ${product.name} al carrito`}
              onClick={() => dispatch(addToCart(product))}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
            >
              + Agregar
            </motion.button>
          </div>
        </div>
      </motion.div>{" "}
    </ProductCardContainer>
  );
}

export default ProductCard;
