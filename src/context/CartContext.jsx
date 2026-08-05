/* eslint-disable react-refresh/only-export-components */
// CartContext administra el carrito de compras y su persistencia.
// Guarda el carrito en localStorage para mantener los productos entre recargas.
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

const parseStoredValue = (value, fallback) => {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn("CartContext: invalid localStorage data, resetting", error);
    return fallback;
  }
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("wtech-cart");
    return parseStoredValue(saved, []);
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [purchasedItems, setPurchasedItems] = useState([]);

  useEffect(() => {
    localStorage.setItem("wtech-cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setIsCartOpen(false);
    setShowPaymentModal(true);
  };

  const [purchasedTotal, setPurchasedTotal] = useState(0);

  const handlePayConfirm = () => {
    setPurchasedItems([...cart]);
    setPurchasedTotal(cartTotal);
    setShowPaymentModal(false);
    setShowSuccessModal(true);
    clearCart();
  };

  const handlePayCancel = () => setShowPaymentModal(false);

  const handleSuccessClose = () => setShowSuccessModal(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        showPaymentModal,
        showSuccessModal,
        purchasedItems,
        purchasedTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        handleCheckout,
        handlePayConfirm,
        handlePayCancel,
        handleSuccessClose,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
