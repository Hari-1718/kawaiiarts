import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container">
    <div className="contact-card">
      <h1>Contact Us 📩</h1>
      <p>Got a question or want to place a custom order?</p>
      <p>We’d love to hear from you!</p>

      <div className="contact-details">
        <p>
          ✉️ Email us at:
          {' '}
          <a href="mailto:Stringartksp16@gmail.com">Stringartksp16@gmail.com</a>
        </p>
        <p>
          📞 Call or WhatsApp:
          {' '}
          <a href="tel:8019824995" className="phone-link">8019824995</a>
        </p>
        <p>
          📷 Follow us on
          {' '}
          <a href="https://instagram.com/kawaiiarts_16" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
        <p className="note">* We usually reply within 1–2 business days 📆</p>
      </div>
    </div>
  </div>
);

export default Contact;
