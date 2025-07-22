import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer">
    <p>
      © 2025 <span className="footer-brand">kawaiiarts</span>. All rights reserved.
      <br />
      Follow us on 
      {' '}
      <a
        href="https://instagram.com/kawaiiarts_16"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram
      </a>
    </p>
  </footer>
);

export default Footer;
