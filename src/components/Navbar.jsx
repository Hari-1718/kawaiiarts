import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

import ThemeToggle from './ThemeToggle';
import ThemeColorPicker from './ThemeColorPicker';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <button
        className={menuOpen ? 'navbar-hamburger open striking' : 'navbar-hamburger striking'}
        onClick={handleMenuToggle}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
        tabIndex={0}
        type="button"
      >
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
        <span className={menuOpen ? 'bar open' : 'bar'}></span>
      </button>
      <div className="navbar-logo">
        <img src="/kawaiiarts logo.jpg" alt="kawaiiarts Logo" height="40" style={{ width: "40px", height: "auto", borderRadius: "60%" }} />
        <span className="brand">Kawaiiarts</span>
      </div>
      <ul
        id="navbar-links"
        className={menuOpen ? 'navbar-links open' : 'navbar-links'}
        tabIndex={menuOpen ? 0 : -1}
        aria-hidden={!menuOpen}
      >
        {/* Mobile Menu Brand Header */}
        <div className="mobile-menu-header" style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: '700', fontFamily: 'Quicksand, sans-serif', color: 'var(--brand-color)' }}>Kawaiiarts</span>
        </div>

        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={closeMenu}>Gallery</Link></li>
        <li><Link to="/shop" className={location.pathname === '/shop' ? 'active' : ''} onClick={closeMenu}>Shop</Link></li>
        <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''} onClick={closeMenu}>Blog</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link></li>
      </ul>
      <div className="navbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <ThemeColorPicker />
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
