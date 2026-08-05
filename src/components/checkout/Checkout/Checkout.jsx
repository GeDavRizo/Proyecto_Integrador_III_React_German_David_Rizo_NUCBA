/*
  Descripción: Página o componente de checkout.
*/

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { useAuth } from "../../../context/AuthContext";
import { sendOrderConfirmationEmail } from "../../../services/emailService";
import {
  clearCart,
  selectCartItems,
  selectCartShippingCost,
  selectCartSubtotal,
  selectCartTotal,
} from "../../../redux/cart/cartSlice";
import {
  createOrderStart,
  createOrderSuccess,
  createOrderFail,
} from "../../../redux/orders/ordersSlice";
import { checkoutInitialValues } from "../../../formik/initialValues";
import { checkoutValidationSchema } from "../../../formik/validationSchema";
import { CheckoutContainer } from "./CheckoutStyles.js";

export default function Checkout() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const shippingCost = useSelector(selectCartShippingCost);
  const cartSubtotal = useSelector(selectCartSubtotal);
  const cartTotal = useSelector(selectCartTotal);
  const { user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const initialValuesWithUser = {
    ...checkoutInitialValues,
    firstName: user?.username || "",
    email: user?.email || "",
  };

  const step1Fields = [
    "firstName",
    "email",
    "cellphone",
    "address",
    "city",
    "country",
    "location",
  ];
  const step2Fields = [
    "cardName",
    "cardNumber",
    "cardExpiry",
    "cardCVC",
    "termsAccepted",
  ];

  const getValidationSchemaForStep = (step) => {
    if (step === 1) {
      return checkoutValidationSchema.pick(step1Fields);
    }
    return checkoutValidationSchema.pick(step2Fields);
  };

  const formik = useFormik({
    initialValues: initialValuesWithUser,
    validationSchema: getValidationSchemaForStep(step),
    onSubmit: async (values) => {
      if (step === 1) {
        setStep(2);
        return;
      }

      if (step === 2) {
        setStep(3);
        return;
      }

      await handlePlaceOrder(values);
    },
  });

  if (cart.length === 0 && step === 1) {
    return (
      <div className="checkout-container">
        <div className="empty-checkout">
          <h2>Tu carrito está vacío</h2>
          <p>Agrega productos para continuar con la compra</p>
          <button
            onClick={() => navigate("/productos")}
            className="btn-continue"
          >
            Continuar Comprando
          </button>
        </div>
      </div>
    );
  }

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\s/g, "").slice(0, 16);
    formik.setFieldValue("cardNumber", value);
  };

  const handleCardCVCChange = (e) => {
    formik.setFieldValue("cardCVC", e.target.value.slice(0, 4));
  };

  const handlePlaceOrder = async (values) => {
    setIsProcessing(true);
    const orderNumber = `ORD-${Date.now()}`;

    try {
      // Simular procesamiento de pago
      await new Promise((resolve) => setTimeout(resolve, 2000));

      dispatch(createOrderStart());
      // Enviar confirmación de compra por email
      await sendOrderConfirmationEmail({
        email: values.email,
        phone: values.cellphone,
        orderNumber,
        total: cartTotal,
        items: cart,
        customer: values.firstName,
      });
      dispatch(
        createOrderSuccess({
          orderNumber,
          email: values.email,
          phone: values.cellphone,
          total: cartTotal,
          items: cart,
          customer: values.firstName,
          createdAt: new Date().toISOString(),
        }),
      );

      // Limpiar carrito y redirigir a página de éxito
      dispatch(clearCart());
      navigate("/checkout/exito", {
        state: {
          orderNumber,
          total: cartTotal,
          items: cart,
          customer: values.firstName,
        },
      });
    } catch (err) {
      dispatch(createOrderFail(err.message || "Error inesperado"));
      console.error("Error processing order:", err);
      alert("Error al procesar el pago. Intenta nuevamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <CheckoutContainer>
      <div className="checkout-container">
        <div className="checkout-wrapper">
          {/* Progress Bar */}
          <div className="checkout-progress">
            <div className={`progress-step ${step >= 1 ? "active" : ""}`}>
              <div className="step-number">1</div>
              <span>Envío</span>
            </div>
            <div className={`progress-line ${step >= 2 ? "active" : ""}`}></div>
            <div className={`progress-step ${step >= 2 ? "active" : ""}`}>
              <div className="step-number">2</div>
              <span>Pago</span>
            </div>
            <div className={`progress-line ${step >= 3 ? "active" : ""}`}></div>
            <div className={`progress-step ${step >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <span>Confirmar</span>
            </div>
          </div>

          <div className="checkout-content">
            {/* Formulario */}
            <div className="checkout-form">
              {/* PASO 1: Información de envío */}
              {step === 1 && (
                <form onSubmit={formik.handleSubmit} className="form-section">
                  <h2>Información de Envío</h2>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">Nombre *</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Apellido</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cellphone">Teléfono *</label>
                      <input
                        type="tel"
                        id="cellphone"
                        name="cellphone"
                        value={formik.values.cellphone}
                        onChange={formik.handleChange}
                        placeholder="+54 9 1234-5678"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Dirección *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      placeholder="Calle, número y apto"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="city">Ciudad *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        placeholder="Tu ciudad"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="country">País *</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        placeholder="Argentina"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="location">Provincia/Estado *</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formik.values.location}
                        onChange={formik.handleChange}
                        placeholder="Buenos Aires"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="postalCode">Código Postal</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={formik.values.postalCode}
                        onChange={formik.handleChange}
                        placeholder="1234"
                      />
                    </div>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={() => navigate("/productos")}
                      className="btn-cancel"
                    >
                      Cancelar
                    </button>
                    <button type="submit" className="btn-next">
                      Continuar al Pago →
                    </button>
                  </div>
                </form>
              )}

              {/* PASO 2: Información de pago */}
              {step === 2 && (
                <form onSubmit={formik.handleSubmit} className="form-section">
                  <h2>Información de Pago</h2>

                  <div className="form-group">
                    <label htmlFor="cardName">Nombre en la Tarjeta *</label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formik.values.cardName}
                      onChange={formik.handleChange}
                      placeholder="Como aparece en la tarjeta"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="cardNumber">Número de Tarjeta *</label>
                    <input
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={formik.values.cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      required
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="cardExpiry">Vencimiento (MM/AA) *</label>
                      <input
                        type="text"
                        id="cardExpiry"
                        name="cardExpiry"
                        value={formik.values.cardExpiry}
                        onChange={formik.handleChange}
                        placeholder="12/25"
                        maxLength="5"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="cardCVC">CVC *</label>
                      <input
                        type="text"
                        id="cardCVC"
                        name="cardCVC"
                        value={formik.values.cardCVC}
                        onChange={handleCardCVCChange}
                        placeholder="123"
                        maxLength="4"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group checkbox">
                    <input
                      type="checkbox"
                      id="termsAccepted"
                      name="termsAccepted"
                      checked={formik.values.termsAccepted}
                      onChange={formik.handleChange}
                      required
                    />
                    <label htmlFor="termsAccepted">
                      Acepto los términos y condiciones de compra *
                    </label>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-back"
                    >
                      ← Volver
                    </button>
                    <button type="submit" className="btn-next">
                      Confirmar Pedido →
                    </button>
                  </div>
                </form>
              )}

              {/* PASO 3: Confirmar pedido */}
              {step === 3 && (
                <div className="form-section confirmation">
                  <h2>Confirmar tu Pedido</h2>

                  <div className="confirmation-section">
                    <h3>Envío a:</h3>
                    <p>
                      {formik.values.firstName} {formik.values.lastName}
                    </p>
                    <p>{formik.values.address}</p>
                    <p>
                      {formik.values.city}, {formik.values.location}
                    </p>
                    <p>
                      {formik.values.postalCode} {formik.values.country}
                    </p>
                  </div>

                  <div className="confirmation-section">
                    <h3>Método de Pago:</h3>
                    <p>
                      Tarjeta terminada en {formik.values.cardNumber.slice(-4)}
                    </p>
                  </div>

                  <div className="form-actions">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-back"
                    >
                      ← Volver
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePlaceOrder(formik.values)}
                      className="btn-place-order"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Procesando..." : "Completar Compra"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Resumen del pedido */}
            <aside className="order-summary">
              <h2>Resumen del Pedido</h2>

              <div className="summary-items">
                {cart.map((item) => (
                  <div key={item.id} className="summary-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="summary-item-image"
                    />
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-quantity">×{item.quantity}</span>
                    </div>
                    <span className="item-price">
                      {(item.price * item.quantity).toFixed(2)} {item.currency}
                    </span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row subtotal">
                <span>Subtotal:</span>
                <span>{cartSubtotal.toFixed(2)} ETH</span>
              </div>

              <div className="summary-row shipping">
                <span>Envío:</span>
                <span>{shippingCost.toFixed(2)} ETH</span>
              </div>

              <div className="summary-row discount">
                <span>Descuento:</span>
                <span>-$0</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row total">
                <span>Total:</span>
                <span>{cartTotal.toFixed(2)} ETH</span>
              </div>

              <div className="summary-info">
                <p>✓ Envío por producto: 0.20 ETH</p>
                <p>✓ Devolución 30 días</p>
                <p>✓ Soporte 24/7</p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  );
}
