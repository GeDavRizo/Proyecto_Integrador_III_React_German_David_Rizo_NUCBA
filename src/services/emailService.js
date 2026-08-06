/*
  Descripción: Servicio para enviar correos de contacto y confirmaciones de pedido usando EmailJS.
  Funciones:
    - Componente React EMAILJS_PUBLIC_KEY.
    - Componente React EMAILJS_SERVICE_ID.
    - Componente React EMAILJS_TEMPLATE_ID.
    - Componente React CONTACT_EMAIL.
    - sendContactEmail
    - sendOrderConfirmationEmail
  Requiere:
    - EmailJS para envío de emails
*/

import emailjs from "@emailjs/browser";

// Servicio central para enviar emails de contacto y de pedido.
// Usa las variables de entorno definidas en Vite.
export const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL;

const areEmailJsVarsConfigured = () => {
  const missing = [];

  if (!EMAILJS_PUBLIC_KEY) missing.push("VITE_EMAILJS_PUBLIC_KEY");
  if (!EMAILJS_SERVICE_ID) missing.push("VITE_EMAILJS_SERVICE_ID");
  if (!EMAILJS_TEMPLATE_ID) missing.push("VITE_EMAILJS_TEMPLATE_ID");
  if (!CONTACT_EMAIL) missing.push("VITE_CONTACT_EMAIL");

  if (missing.length > 0) {
    console.warn(
      `⚠️ EmailJS no está completamente configurado. Faltan las variables: ${missing.join(", ")}`,
    );
    return false;
  }

  return true;
};

const isEmailJsConfigured = areEmailJsVarsConfigured();

if (isEmailJsConfigured) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
} else {
  console.warn(
    "EmailJS no se inicializó porque faltan variables de entorno. El envío de emails será omitido.",
  );
}

const sendEmail = async (templateParams) => {
  if (!isEmailJsConfigured) {
    console.warn(
      "Omitiendo el envío de email porque EmailJS no está configurado.",
    );
    return null;
  }

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
