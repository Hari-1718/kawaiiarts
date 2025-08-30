import React, { useState, useEffect, useRef } from 'react';
import ChangePassword from '../components/ChangePassword';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddressForm from '../components/AddressForm';
import shop1 from '../assets/gallery/shop1.jpg';
import shop2 from '../assets/gallery/shop2.jpg';
import shop3 from '../assets/gallery/shop3.jpg';
import '../styles/Shop.css';

const products = [
  {
    id: 1,
    name: 'I Love You String Art',
    image: shop1,
    price: 1000,
    description: 'Beautiful handcrafted string art with love theme',
    inStock: true,
  },
  {
    id: 2,
    name: 'Teddy Bear String Art',
    image: shop2,
    price: 1200,
    description: 'Adorable teddy bear design in vibrant colors',
    inStock: true,
  },
  {
    id: 3,
    name: 'Premium String Art Design',
    image: shop3,
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    description: 'Exquisite handcrafted string art with premium materials',
    inStock: true,
  },
];

const Ecommerce = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const profileMenuRef = useRef(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  // Check authentication on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }
    fetchOrders();
  }, [isAuthenticated, navigate, user]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const createOrder = async () => {
    if (cart.length === 0) {
      setMessage('Your cart is empty');
      return;
    }

    // Check if user has address information
    if (!user.address || !user.address.street) {
      setMessage('Please provide your shipping address to continue with your purchase.');
      setShowAddressForm(true);
      return;
    }

    setLoading(true);
    try {
      const orderData = {
        items: cart.map(item => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        totalAmount: getTotalPrice(),
        shippingAddress: user.address,
        paymentMethod: 'WhatsApp'
      };

      await axios.post('http://localhost:5000/api/orders', orderData);
      setCart([]);
      setShowCart(false);
      setMessage('Order created successfully!');
      fetchOrders();
    } catch (error) {
      console.error('Error creating order:', error);
      setMessage('Failed to create order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddressSubmit = async (addressData) => {
    setShowAddressForm(false);
    setMessage('Address saved successfully! Now creating your order...');
    
    // Update the user context with the new address
    // This will be handled by the AuthContext when the user data is updated
    
    // Now create the order with the new address
    setLoading(true);
    try {
      const orderData = {
        items: cart.map(item => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image
        })),
        totalAmount: getTotalPrice(),
        shippingAddress: addressData,
        paymentMethod: 'WhatsApp'
      };

      await axios.post('http://localhost:5000/api/orders', orderData);
      setCart([]);
      setShowCart(false);
      setMessage('Order created successfully!');
      fetchOrders();
    } catch (error) {
      console.error('Error creating order:', error);
      setMessage('Failed to create order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddressCancel = () => {
    setShowAddressForm(false);
    setMessage('Address collection cancelled. Please add your shipping address to continue with your purchase.');
  };

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

  // Close profile menu on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    }
    if (showProfileMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showProfileMenu]);

  return (
    <div className="shop-container">
             {/* Header with navigation buttons */}
       <div className="shop-header">
         <div className="shop-header-top">
           <h1>Shop Products</h1>
           <div className="user-info">
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
             
             <div className="profile-menu-container" ref={profileMenuRef} style={{ position: 'relative', display: 'inline-block' }}>
               <button
                 className="profile-circle-btn"
                 onClick={() => setShowProfileMenu((prev) => !prev)}
                 aria-label="Profile"
                 style={{
                   width: 44,
                   height: 44,
                   borderRadius: '50%',
                   background: '#e74c3c',
                   border: 'none',
                   color: '#fff',
                   fontWeight: 'bold',
                   fontSize: 20,
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   cursor: 'pointer',
                 }}
               >
                 {user?.name ? user.name[0].toUpperCase() : <span>U</span>}
               </button>
               {showProfileMenu && (
                 <div
                   className="profile-dropdown"
                   style={{
                     position: 'absolute',
                     right: 0,
                     top: 50,
                     background: '#fff',
                     boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                     borderRadius: 8,
                     minWidth: 180,
                     zIndex: 1000,
                     padding: 12,
                   }}
                 >
                   <div style={{ marginBottom: 8, fontWeight: 'bold', color: '#333' }}>
                     {user?.name || user?.email || 'User'}
                   </div>
                   <div style={{ marginBottom: 8, color: '#888', fontSize: 13 }}>
                     {user?.email}
                   </div>
                   <button
                     style={{
                       width: '100%',
                       background: '#f1c40f',
                       border: 'none',
                       borderRadius: 4,
                       padding: '6px 0',
                       marginBottom: 8,
                       color: '#222',
                       fontWeight: 'bold',
                       cursor: 'pointer',
                     }}
                     onClick={() => {
                       setShowProfileMenu(false);
                       setTimeout(() => setShowChangePassword(true), 0);
                     }}
                   >
                     Change Password
                   </button>
      {showChangePassword && (
        <ChangePassword onClose={() => setShowChangePassword(false)} onSuccess={() => setShowChangePassword(false)} />
      )}
                   <button
                     style={{
                       width: '100%',
                       background: '#e74c3c',
                       border: 'none',
                       borderRadius: 4,
                       padding: '6px 0',
                       color: '#fff',
                       fontWeight: 'bold',
                       cursor: 'pointer',
                     }}
                     onClick={handleLogout}
                   >
                     Logout
                   </button>
                 </div>
               )}
             </div>
           </div>
         </div>
         
         {message && (
           <div className={`message ${message.includes('successfully') ? 'success' : 'error'}`}>
             {message}
           </div>
         )}
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
                <button 
                  onClick={createOrder}
                  className="checkout-btn"
                  disabled={loading}
                >
                  {loading ? 'Creating Order...' : 'Create Order'}
                </button>
                <a
                  href={`https://wa.me/918019824995?text=Hi, I want to order: ${cart.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ')}. Total: ₹${getTotalPrice()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
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
            {orders.length === 0 ? (
              <div className="empty-orders">
                <p>No orders yet</p>
                <button 
                  className="continue-shopping-btn"
                  onClick={() => setShowOrders(false)}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <div className="orders-list">
                {orders.map((order) => (
                  <div key={order._id} className="order-item">
                    <div className="order-header">
                      <h4>Order #{order._id.slice(-6)}</h4>
                      <span className={`order-status ${order.orderStatus.toLowerCase()}`}>
                        {order.orderStatus}
                      </span>
                    </div>
                    <div className="order-items">
                      {order.items.map((item, index) => (
                        <div key={index} className="order-product">
                          <span>{item.name} x{item.quantity}</span>
                          <span>₹{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="order-footer">
                      <span className="order-total">Total: ₹{order.totalAmount}</span>
                      <span className="order-date">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
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
                <div className="product-price-container">
                  {product.discount ? (
                    <>
                      <p className="product-price">₹{product.price}</p>
                      <p className="original-price">₹{product.originalPrice}</p>
                      <span className="discount-badge">{product.discount}% OFF</span>
                    </>
                  ) : (
                    <p className="product-price">₹{product.price}</p>
                  )}
                </div>
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

      {/* Address Form Modal */}
      {showAddressForm && (
        <AddressForm
          onAddressSubmit={handleAddressSubmit}
          onCancel={handleAddressCancel}
        />
      )}
    </div>
  );
};

export default Ecommerce;
