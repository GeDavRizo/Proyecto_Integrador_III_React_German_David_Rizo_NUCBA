/*
  Archivo: src/services/emailService.js
  Descripción: Servicio para enviar emails con EmailJS.
*/

import emailjs from "@emailjs/browser";

// Servicio central para enviar emails de contacto y de pedido.
// Usa las variables de entorno definidas en Vite.
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

// Validar que existen las variables de entorno
if (!EMAILJS_PUBLIC_KEY) {
  console.warn(
    "⚠️ VITE_EMAILJS_PUBLIC_KEY no configurada. Revisa tu archivo .env",
  );
}

// Inicializar EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const sendEmail = async (templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
    );

    return response;
  } catch (error) {
    console.error("Error al enviar email:", error);
    throw error;
  }
};

export const sendContactEmail = async (formData) => {
  // Email 1: Confirmación al usuario
  const userEmailParams = {
    to_email: formData.email,
    reply_to: CONTACT_EMAIL,
    from_name: "W-TECH",
    from_email: CONTACT_EMAIL,
    phone: formData.phone || "No proporcionado",
    subject: "Recibimos tu mensaje",
    message: `¡Hola ${formData.name}!\n\nGracias por contactarnos. Recibimos tu mensaje y nos pondremos en contacto pronto.\n\nTus datos:\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || "No proporcionado"}\nMensaje: ${formData.message}\n\nSaludos,\nW-TECH`,
  };

  // Email 2: Notificación al administrador del sitio
  const adminEmailParams = {
    to_email: CONTACT_EMAIL,
    reply_to: formData.email,
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone || "No proporcionado",
    subject: "Nuevo Mensaje de Contacto",
    message: `Nuevo mensaje de contacto recibido.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || "No proporcionado"}\n\nMensaje:\n${formData.message}`,
  };

  try {
    // Enviar ambos emails
    await sendEmail(userEmailParams);
    await sendEmail(adminEmailParams);
  } catch (error) {
    console.error("Error al enviar emails de contacto:", error);
    throw error;
  }
};

export const sendOrderConfirmationEmail = async (orderData) => {
  const itemsText =
    orderData.items
      ?.map(
        (item) =>
          `${item.name} x${item.quantity} - ${item.price} ${item.currency}`,
      )
      .join("\n") || "";

  // Email 1: Confirmación al cliente
  const customerEmailParams = {
    to_email: orderData.email,
    reply_to: CONTACT_EMAIL,
    from_name: "W-TECH",
    from_email: CONTACT_EMAIL,
    subject: `Confirmación de Pedido #${orderData.orderNumber}`,
    phone: orderData.phone || "No proporcionado",
    message: `¡Hola ${orderData.customer}!\n\nGracias por tu compra.\n\nNúmero de Orden: ${orderData.orderNumber}\nTotal: $${orderData.total}\n\nProductos:\n${itemsText}\n\nTe enviaremos actualizaciones de tu pedido al email registrado.\n\nSaludos,\nW-TECH`,
  };

  // Email 2: Notificación al administrador
  const adminEmailParams = {
    to_email: CONTACT_EMAIL,
    reply_to: orderData.email,
    from_name: "W-TECH Store",
    from_email: CONTACT_EMAIL,
    subject: `Nueva Orden Recibida #${orderData.orderNumber}`,
    phone: orderData.phone || "No proporcionado",
    message: `Nueva orden recibida.\n\nCliente: ${orderData.customer}\nEmail: ${orderData.email}\nTeléfono: ${orderData.phone || "No proporcionado"}\n\nNúmero de Orden: ${orderData.orderNumber}\nTotal: $${orderData.total}\n\nProductos:\n${itemsText}`,
  };

  try {
    // Enviar ambos emails
    await sendEmail(customerEmailParams);
    await sendEmail(adminEmailParams);
  } catch (error) {
    console.error("Error al enviar emails de orden:", error);
    throw error;
  }
};
