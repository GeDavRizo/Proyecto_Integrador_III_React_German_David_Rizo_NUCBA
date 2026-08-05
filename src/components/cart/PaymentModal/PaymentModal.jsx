/*
  Archivo: src/components/cart/PaymentModal/PaymentModal.jsx
  Descripción: Modal de pago en el carrito.
*/

import { useState } from "react";
import { PaymentModalContainer } from "./PaymentModalStyles.js"

function PaymentModal({ onConfirm, onCancel }) {
  const [selectedMethod, setSelectedMethod] = useState("eth");

  const methods = [
    { value: "eth", icon: "💎", label: "Ethereum (eTH)" },
    { value: "btc", icon: "₿", label: "Bitcoin (BTC)" },
    { value: "usdt", icon: "💵", label: "USDT" },
    { value: "billetera", icon: "📱", label: "Billetera Virtual" },
  ];

  return (
    <PaymentModalContainer>
    <div
      id="payment-overlay"
      className="payment-overlay"
      aria-modal="true"
      role="dialog"
    >
      <div className="payment-modal">
        <h2 className="payment-title">MÉTODO DE PAGO</h2>
        <p className="payment-desc">Elige cómo deseas abonar tu compra:</p>

        <div className="payment-options">
          {methods.map((method) => (
            <label
              key={method.value}
              className={`payment-option ${selectedMethod === method.value ? "selected" : ""}`}
            >
              <input
                type="radio"
                name="payment-method"
                value={method.value}
                checked={selectedMethod === method.value}
                onChange={() => setSelectedMethod(method.value)}
              />
              <span className="payment-option-icon">{method.icon}</span>
              <span className="payment-option-label">{method.label}</span>
            </label>
          ))}
        </div>

        <button
          id="pay-confirm-btn"
          className="btn-primary"
          style={{ width: "100%" }}
          onClick={onConfirm}
        >
          PAGAR ORDEN →
        </button>
        <button
          id="pay-cancel-btn"
          className="btn-ghost"
          style={{ marginTop: "10px" }}
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </div>    </PaymentModalContainer>
  );
}

export default PaymentModal;