import React from 'react';
import '../styles/Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => (
  <div className="shop-container">
    <div className="shop-content">
      <h1>Welcome to Our Shop 🛍️</h1>
      <p className="shop-subtext">
        Where cuteness meets creativity! 
        <br />
        Browse digital downloads & physical art pieces. (E-commerce coming soon.)
      </p>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Link to="/ecommerce">
          <button
            className="shop-ecommerce-btn"
            style={{
              fontSize: '1.4rem',
              padding: '18px 48px',
              background: 'linear-gradient(90deg, #ffb6ec 0%, #b7e3ed 100%)',
              color: '#222',
              border: 'none',
              borderRadius: '32px',
              fontWeight: 'bold',
              boxShadow: '0 6px 24px rgba(183, 227, 237, 0.25)',
              cursor: 'pointer',
              transition: 'all 0.3s',
              letterSpacing: '1px',
            }}
            onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #b7e3ed 0%, #ffb6ec 100%)'}
            onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #ffb6ec 0%, #b7e3ed 100%)'}
          >
            Go to Shopping 🛒
          </button>
        </Link>
      </div>

      <div className="shop-grid">
        <div className="shop-item placeholder">
          <p>🌸 Product Preview</p>
        </div>
        <div className="shop-item placeholder">
          <p>🎨 Handmade Art</p>
        </div>
        <div className="shop-item placeholder">
          <p>📦 Custom Order</p>
          <a
            href="https://wa.me/918019824995?text=Hi, I would like to place a custom order!"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <button
              style={{
                marginTop: '12px',
                padding: '8px 18px', // reduced padding
                background: '#25D366',
                color: '#fff',
                border: 'none',
                borderRadius: '24px',
                fontWeight: 'bold',
                fontSize: '0.95rem', // reduced font size
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(37, 211, 102, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'background 0.3s',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#128C7E'}
              onMouseOut={e => e.currentTarget.style.background = '#25D366'}
            >
              <span role="img" aria-label="WhatsApp">💬</span> Order on WhatsApp
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Shop;
