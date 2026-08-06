/*
  Descripción: Página principal de la tienda con hero, productos destacados, recomendados y contacto.
  Funciones:
    - Componente React HomePage.
    - Componente React Home.
  Requiere:
    - Módulos locales del proyecto
*/

import Hero from "../../components/home/Hero/Hero";
import Bio from "../../components/home/Bio/Bio";
import CardsRecomendacion from "../../components/Recomendados/CardsRecomendacion";
import Products from "../../components/products/Products/Products";
import Novelties from "../../components/home/Novelties/Novelties";
import Contact from "../../components/contact/Contact/Contact";

function HomePage() {
  return (
    <main>
      <Hero />
      <Bio />
      <CardsRecomendacion />
      <Products />
      <Novelties />
      <Contact />
    </main>
  );
}

export default HomePage;
