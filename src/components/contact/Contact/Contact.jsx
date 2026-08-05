/*
  Archivo: src/components/contact/Contact/Contact.jsx
  Descripción: Sección de contacto.
*/

import ContactForm from "../ContactForm/ContactForm";
import { ContactContainer } from "./ContactStyles.js";

function Contact() {
  return (
    <ContactContainer>
      <section id="contacto" className="section">
        <div className="section-line-top"></div>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div className="section-tag">Contacto</div>
          <h2 className="section-title">
            Hablemos del <span className="text-accent">Futuro</span>
          </h2>
          <p className="section-desc">
            ¿Tenés dudas, sugerencias o querés saber más? Escribinos.
          </p>
          <ContactForm />
        </div>
      </section>{" "}
    </ContactContainer>
  );
}

export default Contact;
