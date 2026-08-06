/*
  Descripción: Archivo fuente del proyecto Products.
  Funciones:
    - Componente React Products.
  Requiere:
    - Módulos locales del proyecto
*/

import ProductsGrid from "../ProductsGrid/ProductsGrid";
import { ProductsContainer } from "./ProductsStyles.js";

function Products() {
  return (
    <ProductsContainer>
      <section id="productos" className="section">
        <div className="section-line-top"></div>
        <div className="container">
          <div className="section-tag">Catálogo</div>
          <h2 className="section-title">
            Nuestros <span className="text-accent">Productos</span>
          </h2>
          <p className="section-desc">
            Filtrá por categoría y encontrá tu próximo upgrade.
          </p>
          <ProductsGrid />
        </div>
      </section>{" "}
    </ProductsContainer>
  );
}

export default Products;
