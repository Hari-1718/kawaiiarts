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
          <button className="shop-ecommerce-btn">Go to Shopping 🛒</button>
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
        </div>
      </div>
    </div>
  </div>
);

export default Shop;
