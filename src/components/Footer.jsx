import React, { useState } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      // Reset subscription status after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      {/* Decorative wave at top */}
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="footer-container">
        {/* Main footer content */}
        <div className="footer-main">
          {/* Brand section */}
          <div className="footer-brand-section">
            <div className="footer-logo">
              <img src="/favicon.ico" alt="Kawaiiarts Logo" className="footer-logo-img" />
              <div className="footer-brand-text">
                <h3 className="footer-brand-name">Kawaiiarts</h3>
                <p className="footer-tagline">Spreading joy with cute, colorful string art! ✨</p>
              </div>
            </div>
            <div className="footer-social">
              <h4>Follow Our Journey</h4>
              <div className="social-links">
                <a 
                  href="https://instagram.com/kawaiiarts_16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link instagram"
                  aria-label="Follow us on Instagram"
                >
                  <span className="social-icon">📸</span>
                  <span className="social-text">Instagram</span>
                </a>
                <a 
                  href="https://wa.me/918019824995" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link whatsapp"
                  aria-label="Chat with us on WhatsApp"
                >
                  <span className="social-icon">💬</span>
                  <span className="social-text">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick links section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/" className="footer-link">🏠 Home</a></li>
              <li><a href="/gallery" className="footer-link">🖼️ Gallery</a></li>
              <li><a href="/shop" className="footer-link">🛍️ Shop</a></li>
              <li><a href="/blog" className="footer-link">📝 Blog</a></li>
              <li><a href="/contact" className="footer-link">📞 Contact</a></li>
            </ul>
          </div>

          {/* Contact section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Get in Touch</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:Stringartksp16@gmail.com" className="contact-link">
                  Stringartksp16@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+918019824995" className="contact-link">
                  +91 8019824995
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span className="contact-text">India</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">⏰</span>
                <span className="contact-text">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Stay Updated</h4>
            <p className="newsletter-text">Get the latest updates on new designs and special offers!</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn">
                  <span className="btn-text">Subscribe</span>
                  <span className="btn-icon">✨</span>
                </button>
              </div>
              {isSubscribed && (
                <div className="subscription-success">
                  <span className="success-icon">🎉</span>
                  <span>Thank you for subscribing!</span>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2024 <span className="copyright-brand">Kawaiiarts</span>. All rights reserved.</p>
              <p className="footer-heart">Made with 💖 in India</p>
            </div>
            <div className="footer-extra-links">
              <a href="/privacy" className="footer-extra-link">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="/terms" className="footer-extra-link">Terms of Service</a>
              <span className="separator">•</span>
              <a href="/shipping" className="footer-extra-link">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="footer-floating-elements">
        <div className="floating-element">🎨</div>
        <div className="floating-element">✨</div>
        <div className="floating-element">💖</div>
        <div className="floating-element">🌸</div>
      </div>
    </footer>
  );
};

export default Footer;
