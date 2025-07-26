import React, { useState } from 'react';
import shop1 from '../assets/gallery/shop1.jpg';
import shop2 from '../assets/gallery/shop2.jpg';
import '../styles/Shop.css';

const products = [
  {
    id: 1,
    name: 'I Love You String Art',
    image: shop1,
    price: 1200,
    description: 'Beautiful handcrafted string art with love theme',
    inStock: true,
  },
  {
    id: 2,
    name: 'Teddy Bear String Art',
    image: shop2,
    price: 1000,
    description: 'Adorable teddy bear design in vibrant colors',
    inStock: true,
  },
];

const Ecommerce = () => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const addToWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === productId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="shop-container">
      {/* Header with navigation buttons */}
      <div className="shop-header">
        <h1>Shop Products</h1>
        <div className="shop-nav-buttons">
          <button 
            className="nav-btn cart-btn"
            onClick={() => setShowCart(!showCart)}
            aria-label={`Shopping cart - ${cart.length} items`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6"/>
            </svg>
            <span>Bag ({cart.length})</span>
          </button>
          
          <button 
            className="nav-btn orders-btn"
            onClick={() => setShowOrders(!showOrders)}
            aria-label="View orders"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
            </svg>
            <span>Orders</span>
          </button>
          
          <button 
            className="nav-btn wishlist-btn"
            onClick={() => setShowCart(false)}
            aria-label={`Wishlist - ${wishlist.length} items`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span>Wishlist ({wishlist.length})</span>
          </button>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="cart-sidebar" role="dialog" aria-label="Shopping cart">
          <div className="cart-header">
            <h2>Shopping Bag</h2>
            <button 
              className="close-btn"
              onClick={() => setShowCart(false)}
              aria-label="Close cart"
            >
              ×
            </button>
          </div>
          
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your bag is empty</p>
              <button 
                className="continue-shopping-btn"
                onClick={() => setShowCart(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>₹{item.price}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    ×
                  </button>
                </div>
              ))}
              
              <div className="cart-total">
                <h3>Total: ₹{getTotalPrice()}</h3>
                <a
                  href={`https://wa.me/918019824995?text=Hi, I want to order: ${cart.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ')}. Total: ₹${getTotalPrice()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="checkout-btn"
                >
                  Checkout via WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Orders Sidebar */}
      {showOrders && (
        <div className="orders-sidebar" role="dialog" aria-label="Order history">
          <div className="orders-header">
            <h2>Order History</h2>
            <button 
              className="close-btn"
              onClick={() => setShowOrders(false)}
              aria-label="Close orders"
            >
              ×
            </button>
          </div>
          
          <div className="orders-content">
            <p>Track your orders and view order history</p>
            <a
              href="https://wa.me/918019824995?text=Hi, I want to check my order status"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              Contact for Order Status
            </a>
          </div>
        </div>
      )}

      {/* Main Shop Content */}
      <div className="shop-content">
        <p className="shop-subtext">
          Discover our handcrafted string art creations. Each piece is made with love and attention to detail.
        </p>
        
        <div className="shop-grid">
          {products.map((product) => (
            <div className="shop-item" key={product.id}>
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.description} 
                />
                <div className="product-overlay">
                  <button 
                    className="wishlist-btn-overlay"
                    onClick={() => addToWishlist(product)}
                    aria-label={`Add ${product.name} to wishlist`}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlist.find(item => item.id === product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">₹{product.price}</p>
                <p className="stock-status">
                  {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </p>
                
                <div className="product-actions">
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                    disabled={!product.inStock}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    Add to Bag
                  </button>
                  
                  <a
                    href={`https://wa.me/918019824995?text=Hi, I am interested in ${encodeURIComponent(product.name)}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-now-btn"
                    aria-label={`Buy ${product.name} now via WhatsApp`}
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
