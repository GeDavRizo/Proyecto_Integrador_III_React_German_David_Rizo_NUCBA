/*
  Descripción: Utilidades para gestionar cálculos y transformaciones del carrito de compras.
  Funciones:
    - addItemToCart
    - removeItemFromCart
    - calculateShippingCost
    - resetShippingCost
*/

export const addItemToCart = (cartItems, product) => {
  const productInCart = cartItems.find((item) => item.id === product.id);

  if (productInCart) {
    return cartItems.map((item) =>
      item.id === productInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item,
    );
  }

  return [
    ...cartItems,
    {
      ...product,
      quantity: 1,
    },
  ];
};

export const removeItemFromCart = (cartItems, id) => {
  const productToRemove = cartItems.find((item) => item.id === id);
  if (!productToRemove) {
    return cartItems;
  }

  if (productToRemove.quantity > 1) {
    return cartItems.map((item) =>
      item.id === productToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
  }

  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const calculateShippingCost = (
  cartItems,
  shippingCostPerProduct = 0.2,
) => {
  if (cartItems.length === 0) {
    return 0;
  }

  return cartItems.reduce(
    (total, item) => total + item.quantity * shippingCostPerProduct,
    0,
  );
};

export const resetShippingCost = (cartItems, shippingCostPerProduct = 0.2) => {
  if (cartItems.length === 0) {
    return 0;
  }

  return calculateShippingCost(cartItems, shippingCostPerProduct);
};
