import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Shop = lazy(() => import('./pages/Shop'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Ecommerce = lazy(() => import('./pages/Ecom'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          fontSize: '1.2rem',
          color: '#666'
        }}>
          Loading...
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ecommerce" element={<Ecommerce/>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
