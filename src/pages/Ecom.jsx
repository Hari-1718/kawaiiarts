import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AddressForm from '../components/AddressForm';
import shop1 from '../assets/gallery/shop1.jpg';
import shop2 from '../assets/gallery/shop2.jpg';
import shop3 from '../assets/gallery/shop3.jpg';
import '../styles/Shop.css';
import { Sidebar, SidebarBody, SidebarLink } from "../components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconShoppingBag,
  IconTruckDelivery,
  IconHeart,
} from "@tabler/icons-react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

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
  const { user, loading: authLoading, isAuthenticated, logout } = useAuth();
  const [shippingAddress, setShippingAddress] = useState(null);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/auth');
      return;
    }
  }, [authLoading, isAuthenticated, navigate]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchOrders();
      if (user?.address) {
        setShippingAddress(user.address);
      }
    }
  }, [isAuthenticated, user]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/orders');
      setOrders(res.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      onClick: () => { setShowCart(false); setShowOrders(false); setShowWishlist(false); }
    },
    {
      label: "My Cart",
      href: "#",
      icon: (
        <IconShoppingBag className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      onClick: () => { setShowCart(true); setShowOrders(false); setShowWishlist(false); }
    },
    {
      label: "My Orders",
      href: "#",
      icon: (
        <IconTruckDelivery className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      onClick: () => { setShowOrders(true); setShowCart(false); setShowWishlist(false); }
    },
    {
      label: "Wishlist",
      href: "#",
      icon: (
        <IconHeart className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      onClick: () => { setShowWishlist(true); setShowCart(false); setShowOrders(false); }
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      onClick: handleLogout
    },
  ];

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const createOrder = async () => {
    if (cart.length === 0) {
      setMessage('Your cart is empty');
      return;
    }

    if (!shippingAddress || !shippingAddress.street) {
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
        shippingAddress: shippingAddress,
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
    setShippingAddress(addressData);
    setMessage('Address saved! Creating your order...');
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
    setMessage('Added to bag!');
    setTimeout(() => setMessage(''), 2000);
  };

  const addToWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        setMessage('Removed from wishlist');
        setTimeout(() => setMessage(''), 2000);
        return prev.filter(item => item.id !== product.id);
      }
      setMessage('Added to wishlist');
      setTimeout(() => setMessage(''), 2000);
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


  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border-none bg-gray-100 md:flex-row dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} onClick={link.onClick} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: user?.name || "User",
                href: "#",
                icon: (
                  <div className="h-7 w-7 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700 text-xs font-bold shrink-0">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-y-auto h-full bg-white dark:bg-neutral-900">
        <div className="p-2 md:p-10 border border-neutral-200 dark:border-neutral-700 rounded-tl-2xl flex-1 bg-white dark:bg-neutral-900">
          <div className="shop-header">
            <h1>{showWishlist ? 'My Wishlist' : showCart ? 'Shopping Bag' : showOrders ? 'Order History' : 'Shop Products'}</h1>
            {message && (
              <div className={`message ${message.includes('successfully') || message.includes('Added') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </div>

          {/* Content Logic */}
          {showCart ? (
            <div className="cart-sidebar-embedded w-full max-w-4xl mx-auto">
              <div className="cart-header">
                <h2>Shopping Bag</h2>
                <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
              </div>
              {cart.length === 0 ? (
                <div className="empty-cart"><p>Your bag is empty</p><button className="continue-shopping-btn" onClick={() => setShowCart(false)}>Continue Shopping</button></div>
              ) : (
                <div className="cart-items">
                  {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img src={item.image} alt={item.name} />
                      <div className="cart-item-details">
                        <h3>{item.name}</h3><p>₹{item.price}</p>
                        <div className="quantity-controls">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        </div>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>×</button>
                    </div>
                  ))}
                  <div className="cart-total">
                    <h3>Total: ₹{getTotalPrice()}</h3>
                    <button onClick={createOrder} className="checkout-btn" disabled={loading}>{loading ? 'Creating Order...' : 'Create Order'}</button>
                    <a href={`https://wa.me/918019824995?text=Hi, I want to order: ${cart.map(item => `${item.name} (Qty: ${item.quantity})`).join(', ')}. Total: ₹${getTotalPrice()}`} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">Checkout via WhatsApp</a>
                  </div>
                </div>
              )}
            </div>
          ) : showOrders ? (
            <div className="orders-sidebar-embedded w-full max-w-4xl mx-auto">
              <div className="orders-header">
                <h2>Order History</h2>
                <button className="close-btn" onClick={() => setShowOrders(false)}>×</button>
              </div>
              <div className="orders-content">
                {orders.length === 0 ? (
                  <div className="empty-orders"><p>No orders yet</p><button className="continue-shopping-btn" onClick={() => setShowOrders(false)}>Start Shopping</button></div>
                ) : (
                  <div className="orders-list">
                    {orders.map((order) => (
                      <div key={order._id} className="order-item">
                        <div className="order-header"><h4>Order #{order._id.slice(-6)}</h4><span className={`order-status ${order.orderStatus.toLowerCase()}`}>{order.orderStatus}</span></div>
                        <div className="order-items">{order.items.map((item, index) => (<div key={index} className="order-product"><span>{item.name} x{item.quantity}</span><span>₹{item.price}</span></div>))}</div>
                        <div className="order-footer"><span className="order-total">Total: ₹{order.totalAmount}</span><span className="order-date">{new Date(order.createdAt).toLocaleDateString()}</span></div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ) : showWishlist ? (
            <div className="shop-grid">
              {wishlist.length === 0 ? (
                <div className="empty-orders w-full col-span-full"><p>Your wishlist is empty</p><button className="continue-shopping-btn" onClick={() => setShowWishlist(false)}>Explore Products</button></div>
              ) : (
                wishlist.map((product) => (
                  <div className="shop-item" key={product.id}>
                    <div className="product-image">
                      <img src={product.image} alt={product.description} />
                      <div className="product-overlay">
                        <button className="wishlist-btn-overlay" onClick={() => addToWishlist(product)}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                        </button>
                      </div>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="product-description">{product.description}</p>
                      <div className="product-price-container">
                        {product.discount ? <><p className="product-price">₹{product.price}</p><p className="original-price">₹{product.originalPrice}</p><span className="discount-badge">{product.discount}% OFF</span></> : <p className="product-price">₹{product.price}</p>}
                      </div>
                      <p className="stock-status">{product.inStock ? '✅ In Stock' : '❌ Out of Stock'}</p>
                      <div className="product-actions">
                        <button className="add-to-cart-btn" onClick={() => addToCart(product)} disabled={!product.inStock}>Add to Bag</button>
                        <a href={`https://wa.me/918019824995?text=Hi, I am interested in ${encodeURIComponent(product.name)}!`} target="_blank" rel="noopener noreferrer" className="buy-now-btn">Buy Now</a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div className="shop-grid">
              {products.map((product) => (
                <div className="shop-item" key={product.id}>
                  <div className="product-image">
                    <img src={product.image} alt={product.description} />
                    <div className="product-overlay">
                      <button className="wishlist-btn-overlay" onClick={() => addToWishlist(product)}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlist.find(item => item.id === product.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price-container">
                      {product.discount ? <><p className="product-price">₹{product.price}</p><p className="original-price">₹{product.originalPrice}</p><span className="discount-badge">{product.discount}% OFF</span></> : <p className="product-price">₹{product.price}</p>}
                    </div>
                    <p className="stock-status">{product.inStock ? '✅ In Stock' : '❌ Out of Stock'}</p>
                    <div className="product-actions">
                      <button className="add-to-cart-btn" onClick={() => addToCart(product)} disabled={!product.inStock}>Add to Bag</button>
                      <a href={`https://wa.me/918019824995?text=Hi, I am interested in ${encodeURIComponent(product.name)}!`} target="_blank" rel="noopener noreferrer" className="buy-now-btn">Buy Now</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Address Form Modal */}
          {showAddressForm && (
            <AddressForm
              onAddressSubmit={handleAddressSubmit}
              onCancel={handleAddressCancel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src="/kawaiiarts logo.jpg" className="h-7 w-8 shrink-0 rounded-lg object-cover" alt="Logo" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        KawaiiArts
      </motion.span>
    </a>
  );
};
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img src="/kawaiiarts logo.jpg" className="h-7 w-8 shrink-0 rounded-lg object-cover" alt="Logo" />
    </a>
  );
};

export default Ecommerce;
