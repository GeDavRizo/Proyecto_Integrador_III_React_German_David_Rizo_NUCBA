/*
  Archivo: src/utils/pickRandomProducts.js
  Descripción: Función para seleccionar productos aleatorios.
*/

export const pickRandomProducts = (products, cantidad = 6) => {
  const source = Array.isArray(products) ? [...products] : [];
  const limit = Math.min(Math.max(cantidad, 0), source.length);

  for (let index = source.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [source[index], source[randomIndex]] = [source[randomIndex], source[index]];
  }

  return source.slice(0, limit);
};

export default pickRandomProducts;
