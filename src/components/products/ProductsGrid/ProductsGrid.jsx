/*
  Descripción: Cuadrícula que organiza y muestra los productos disponibles.
  Funciones:
    - Componente React ProductsGrid.
  Requiere:
    - Módulos locales del proyecto
    - React
    - React Redux
*/

// ProductsGrid.jsx muestra la lista de productos y aplica filtros.
// También controla la paginación de "ver más" según el estado global.
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import FilterBar from "../FilterBar/FilterBar";
import { ProductsGridContainer } from "./ProductsGridStyles.js";
import {
  selectActiveCategory,
  setActiveCategory,
} from "../../../redux/categories/categoriesSlice";
import {
  selectProducts,
  setVisibleCount,
  selectVisibleCount,
} from "../../../redux/products/productsSlice";
import { INITIAL_LIMIT } from "../../../utils/constants";

function ProductsGrid() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const activeFilter = useSelector(selectActiveCategory);
  const visibleCount = useSelector(selectVisibleCount);

  useEffect(() => {
    dispatch(setVisibleCount(INITIAL_LIMIT));
  }, [activeFilter, dispatch]);

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = displayedProducts.length < filteredProducts.length;

  return (
    <ProductsGridContainer>
      <div>
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={(category) => dispatch(setActiveCategory(category))}
        />
        <div id="products-grid" className="products-grid">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {(hasMore || visibleCount > INITIAL_LIMIT) && (
          <div className="view-more-container">
            {visibleCount > INITIAL_LIMIT && (
              <button
                onClick={() =>
                  dispatch(
                    setVisibleCount(
                      Math.max(INITIAL_LIMIT, visibleCount - INITIAL_LIMIT),
                    ),
                  )
                }
                className="btn-view-more btn-view-less"
              >
                Ver menos
              </button>
            )}
            {hasMore && (
              <button
                onClick={() =>
                  dispatch(setVisibleCount(visibleCount + INITIAL_LIMIT))
                }
                className="btn-view-more"
              >
                Ver más
              </button>
            )}
          </div>
        )}
      </div>{" "}
    </ProductsGridContainer>
  );
}

export default ProductsGrid;
