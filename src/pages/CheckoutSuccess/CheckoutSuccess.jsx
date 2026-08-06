/*
  Descripción: Página de confirmación que muestra el éxito de la compra.
  Funciones:
    - Componente React CheckoutSuccessPage.
    - Componente React CheckoutSuccessPage.
    - Componente React CheckoutSuccess.
  Requiere:
    - Módulos locales del proyecto
    - React Router
*/

import { useLocation, useNavigate } from "react-router-dom";
import { CheckoutSuccessContainer } from "./CheckoutSuccessStyles.js";

export default function CheckoutSuccessPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  if (!state) {
    return (
      <CheckoutSuccessContainer>
        <div className="checkout-success-container">
          <div className="checkout-success-card">
            <p>No hay información de compra disponible</p>
            <button onClick={() => navigate("/")} className="btn-home">
              Volver a Inicio
            </button>
          </div>
        </div>
      </CheckoutSuccessContainer>
    );
  }

  return (
    <CheckoutSuccessContainer>
      <div className="checkout-success-container">
        <div className="checkout-success-card">
          <div className="checkout-success-icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="38" fill="#27ae60" opacity="0.1" />
              <circle
                cx="40"
                cy="40"
                r="38"
                stroke="#27ae60"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M55 30L35 50L25 40"
                stroke="#27ae60"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>

          <h1>¡Compra Confirmada!</h1>
          <p className="subtitle">Gracias por tu compra, {state.customer}</p>

          <div className="order-details">
            <div className="detail-item">
              <span className="label">Número de Orden:</span>
              <span className="value">{state.orderNumber}</span>
            </div>
            <div className="detail-item">
              <span className="label">Total Pagado:</span>
              <span className="value">{state.total.toFixed(2)} ETH</span>
            </div>
            <div className="detail-item">
              <span className="label">Productos:</span>
              <span className="value">{state.items?.length || 0}</span>
            </div>
          </div>

          <div className="items-list">
            <h3>Productos Comprados:</h3>
            {state.items?.map((item) => (
              <div key={item.id} className="item-row">
                <span>{item.name}</span>
                <span className="qty">×{item.quantity}</span>
                <span className="price">
                  {(item.price * item.quantity).toFixed(2)} {item.currency}
                </span>
              </div>
            ))}
          </div>

          <div className="success-message">
            <p>✓ Te enviaremos un email de confirmación</p>
            <p>✓ Tu pedido será procesado en 24 horas</p>
            <p>✓ Recibirás actualizaciones de seguimiento</p>
          </div>

          <div className="action-buttons">
            <button onClick={() => navigate("/")} className="btn-home">
              Volver a Inicio
            </button>
            <button onClick={() => navigate("/productos")} className="btn-shop">
              Continuar Comprando
            </button>
          </div>
        </div>
      </div>
    </CheckoutSuccessContainer>
  );
}
