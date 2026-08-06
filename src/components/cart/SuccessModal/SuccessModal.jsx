/*
  Descripción: Modal de éxito que muestra la confirmación del pago.
  Funciones:
    - Componente React SuccessModal.
  Requiere:
    - Módulos locales del proyecto
*/

import { SuccessModalContainer } from "./SuccessModalStyles.js"
function SuccessModal({ purchasedItems, total, onClose }) {
  return (
    <SuccessModalContainer>
    <div className="success-overlay" aria-modal="true" role="dialog">
      <div className="success-modal">
        <button
          className="success-modal-close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="success-icon-wrapper">
          <div className="success-ring"></div>
          <div className="success-check">✓</div>
        </div>
        <h2 className="success-title">
          ¡PRODUCTOS <span className="text-accent">COMPRADOS!</span>
        </h2>
        <p className="success-desc">
          Tu orden fue procesada exitosamente. Este es el resumen:
        </p>

        <div className="purchased-list">
          {purchasedItems.map((item) => (
            <div key={item.id} className="purchased-item">
              <div className="purchased-item-inner">
                <img
                  src={item.image}
                  alt={item.name}
                  className="purchased-item-img"
                />
                <div className="purchased-item-info">
                  <p className="purchased-item-name">{item.name}</p>
                  <p className="purchased-item-qty">
                    Cantidad: {item.quantity}
                  </p>
                </div>
                <div className="purchased-item-prices">
                  <p className="purchased-item-subtotal">
                    {(item.price * item.quantity).toFixed(2)} eTH
                  </p>
                  <p className="purchased-item-unit">
                    {item.price.toFixed(2)} c/u
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="success-total">
          <span className="success-total-label">Total pagado</span>
          <span className="success-total-value">{total.toFixed(2)} eTH</span>
        </div>

        <div className="delivery-msg">
          <p>
            🚀 Tu pedido será procesado en las próximas{" "}
            <strong>24-48 hs</strong>.
          </p>
        </div>

        <button className="btn-primary" onClick={onClose}>
          SEGUIR COMPRANDO →
        </button>
      </div>
    </div>    </SuccessModalContainer>
  );
}

export default SuccessModal;