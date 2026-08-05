/*
  Archivo: src/components/cart/CartSidebar/CartSidebar.jsx
  Descripción: Lógica del carrito de compras.
*/

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartSidebarContainer } from "./CartSidebarStyles.js";
import {
  addToCart,
  clearCart,
  removeFromCart,
  selectCartHidden,
  selectCartItems,
  selectCartShippingCost,
  selectCartSubtotal,
  selectCartTotal,
  toggleHiddenCart,
} from "../../../redux/cart/cartSlice";

// Panel del carrito con resumen, cantidad y navegación a checkout.
function CartSidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isCartHidden = useSelector(selectCartHidden);
  const cartItems = useSelector(selectCartItems);
  const shippingCost = useSelector(selectCartShippingCost);
  const cartSubtotal = useSelector(selectCartSubtotal);
  const cartTotal = useSelector(selectCartTotal);

  const handleCheckout = () => {
    if (!isCartHidden) {
      dispatch(toggleHiddenCart());
    }
    navigate("/checkout");
  };

  return (
    <CartSidebarContainer>
      <>
        {!isCartHidden && (
          <div
            className="cart-overlay"
            onClick={() => dispatch(toggleHiddenCart())}
          ></div>
        )}

        <aside className={`cart-sidebar ${!isCartHidden ? "open" : ""}`}>
          <div className="cart-header">
            <h2 className="cart-header-title">MI CARRITO</h2>
            <button
              className="cart-close-btn"
              aria-label="Cerrar carrito"
              onClick={() => dispatch(toggleHiddenCart())}
            >
              ✕
            </button>
          </div>

          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="cart-empty">Tu carrito está vacío.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.name}</p>
                    <div className="cart-item-price-row">
                      <p className="cart-item-price">
                        {(item.price * item.quantity).toFixed(2)} eTH
                      </p>
                      <div className="cart-qty-controls">
                        <button
                          className="cart-qty-btn"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          −
                        </button>
                        <span className="cart-qty-num">{item.quantity}</span>
                        <button
                          className="cart-qty-btn"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="cart-remove-btn"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    aria-label="Eliminar producto"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"></path>
                      <path d="M10 11v6M14 11v6"></path>
                      <path d="M9 6V4h6v2"></path>
                    </svg>
                  </button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <>
              <div className="cart-summary">
                <div className="cart-summary-row">
                  <span>Subtotal</span>
                  <span>{cartSubtotal.toFixed(2)} eTH</span>
                </div>
                <div className="cart-summary-row">
                  <span>Envío</span>
                  <span>{shippingCost.toFixed(2)} eTH</span>
                </div>
                <div className="cart-summary-divider" />
                <div className="cart-summary-row total-row">
                  <span>Total</span>
                  <span>{cartTotal.toFixed(2)} eTH</span>
                </div>
              </div>
              <div className="cart-footer">
                <button
                  className="btn-primary btn-full"
                  disabled={cartItems.length === 0}
                  onClick={handleCheckout}
                >
                  IR A PAGAR →
                </button>
                <button
                  className="btn-ghost"
                  onClick={() => dispatch(clearCart())}
                >
                  Vaciar carrito
                </button>
              </div>
            </>
          )}
        </aside>
      </>{" "}
    </CartSidebarContainer>
  );
}

export default CartSidebar;
