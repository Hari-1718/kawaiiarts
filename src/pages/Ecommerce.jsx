import React from 'react';
import shop1 from '../assets/gallery/shop1.jpg';
import shop2 from '../assets/gallery/shop2.jpg';
import '../styles/Shop.css';

const products = [
  {
    id: 1,
    name: 'I Love You String Art',
    image: shop1,
    price: 1200,
  },
  {
    id: 2,
    name: 'Teddy Bear String Art',
    image: shop2,
    price: 1000,
  },
];

const Ecommerce = () => (
  <div className="shop-container">
    <div className="shop-content">
      <h1>Shop Products</h1>
      <div className="shop-grid" style={{ display: 'flex', gap: '32px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div className="shop-item" key={product.id}>
            <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <a
              href={`https://wa.me/918019824995?text=Hi, I am interested in ${encodeURIComponent(product.name)}!`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={{ marginTop: '10px', padding: '10px 24px', background: '#25D366', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                Buy Now
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Ecommerce;
