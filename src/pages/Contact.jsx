import React from 'react';
import '../styles/Contact.css';

const Contact = () => (
  <div className="contact-container" style={{ position: 'relative', minHeight: '100vh', display: 'block' }}>
    <div className="contact-card" style={{ position: 'relative', zIndex: 1, margin: '0 auto' }}>
      {/* ...existing contact card content... */}
      <h1>Contact Us <span className="contact-mail-icon" style={{verticalAlign: 'middle', marginLeft: '6px', display: 'inline-block'}}><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="mailRadial" cx="50%" cy="50%" r="80%"><stop offset="0%" stopColor="#fffbe6"/><stop offset="60%" stopColor="#ffb6ec"/><stop offset="100%" stopColor="#b7e3ed"/></radialGradient></defs><rect width="36" height="36" rx="10" fill="url(#mailRadial)"/><g filter="url(#mailShadow)"><path d="M10 14l8 6 8-6" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><rect x="10" y="12" width="16" height="12" rx="3" stroke="#fff" strokeWidth="2.5" fill="none"/></g><defs><filter id="mailShadow" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#b7e3ed"/></filter></defs></svg></span></h1>
      <p>Got a question or want to place a custom order?</p>
      <p>We’d love to hear from you!</p>

      <div className="contact-details">
        {/* ...existing contact details... */}
        <p>
          <span style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fceabb"/>
              <path d="M4 8l8 6 8-6" stroke="#f7b42c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="6" width="16" height="12" rx="2" stroke="#f7b42c" strokeWidth="2"/>
            </svg>
          </span>
          Email us at:
          {' '}
          <a href="mailto:Stringartksp16@gmail.com">Stringartksp16@gmail.com</a>
        </p>
        <p>
          <span style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#e0ffe6"/>
              <path d="M6.5 7.5C7.5 10.5 10.5 13.5 13.5 14.5L16 12C16.5 11.5 17.5 11.5 18 12.5C18.5 13.5 19.5 15.5 19.5 16C19.5 16.5 18.5 18 16 18C10.5 18 6 13.5 6 8C6 5.5 7.5 4.5 8 4.5C8.5 4.5 10.5 5.5 11.5 6C12.5 6.5 12.5 7.5 12 8L9.5 10.5C8.5 11.5 8.5 12.5 9.5 13.5C10.5 14.5 11.5 14.5 12.5 13.5L15 11C15.5 10.5 16.5 10.5 17 11.5C17.5 12.5 18.5 14.5 18.5 15C18.5 15.5 17.5 17 15 17C9.5 17 5 12.5 5 7C5 4.5 6.5 3.5 7 3.5C7.5 3.5 9.5 4.5 10.5 5C11.5 5.5 11.5 6.5 11 7L8.5 9.5C6.5 9.5 6.5 10.5 7.5 11.5C8.5 12.5 9.5 12.5 10.5 11.5L13 9C13.5 8.5 14.5 8.5 15 9.5C15.5 10.5 16.5 12.5 16.5 13C16.5 13.5 15.5 15 13 15C7.5 15 3 10.5 3 5C3 2.5 4.5 1.5 5 1.5C5.5 1.5 7.5 2.5 8.5 3C9.5 3.5 9.5 4.5 9 5L6.5 7.5Z" fill="#34c759"/>
            </svg>
          </span>
          Call or WhatsApp:
          {' '}
          <a href="tel:8019824995" className="phone-link">8019824995</a>
        </p>
        <p>
          <span style={{ verticalAlign: 'middle', marginRight: '8px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#fbeffb"/>
              <path d="M12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5zm0 7.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm5.5-7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1.5c-.1-1.1-.3-1.8-.6-2.4a4.5 4.5 0 0 0-1.5-1.5c-.6-.3-1.3-.5-2.4-.6C14.1 3.1 13.6 3 12 3s-2.1.1-2.9.2c-1.1.1-1.8.3-2.4.6a4.5 4.5 0 0 0-1.5 1.5c-.3.6-.5 1.3-.6 2.4C3.1 9.9 3 10.4 3 12s.1 2.1.2 2.9c.1 1.1.3 1.8.6 2.4a4.5 4.5 0 0 0 1.5 1.5c.6.3 1.3.5 2.4.6.8.1 1.3.2 2.9.2s2.1-.1 2.9-.2c1.1-.1 1.8-.3 2.4-.6a4.5 4.5 0 0 0 1.5-1.5c.3-.6.5-1.3.6-2.4.1-.8.2-1.3.2-2.9s-.1-2.1-.2-2.9zm-1.7 7.1a2.7 2.7 0 0 1-1.5 1.5c-.6.3-1.2.5-2.3.6-.8.1-1.2.2-2.5.2s-1.7-.1-2.5-.2c-1.1-.1-1.7-.3-2.3-.6a2.7 2.7 0 0 1-1.5-1.5c-.3-.6-.5-1.2-.6-2.3-.1-.8-.2-1.2-.2-2.5s.1-1.7.2-2.5c.1-1.1.3-1.7.6-2.3a2.7 2.7 0 0 1 1.5-1.5c.6-.3 1.2-.5 2.3-.6.8-.1 1.2-.2 2.5-.2s1.7.1 2.5.2c1.1.1 1.7.3 2.3.6a2.7 2.7 0 0 1 1.5 1.5c.3.6.5 1.2.6 2.3.1.8.2 1.2.2 2.5s-.1 1.7-.2 2.5c-.1 1.1-.3 1.7-.6 2.3z" fill="#e1306c"/>
            </svg>
          </span>
          Follow us on
          {' '}
          <a href="https://instagram.com/kawaiiarts_16" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
        <p className="note">* We usually reply within 1–2 business days 📆</p>
        <a
          href="https://instagram.com/kawaiiarts_16"
          target="_blank"
          rel="noopener noreferrer"
          className="review-btn"
          aria-label="Leave a review on Instagram (opens in a new tab)"
        >
          Leave a Review
        </a>
      </div>
    </div>
    {/* Large KawaiiArts background text styled like Cygnuxxs example, always at the bottom */}
    <h1
      aria-hidden="true"
      className="kawaiiarts-bg-text"
    >
      KawaiiArts
    </h1>
  </div>
);

export default Contact;
