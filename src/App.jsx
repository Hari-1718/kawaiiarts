import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './styles/global.css';

// Lazy load all components for better code splitting
const Navbar = lazy(() => import('./components/Navbar'));
const Footer = lazy(() => import('./components/Footer'));
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Shop = lazy(() => import('./pages/Shop'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const Ecommerce = lazy(() => import('./pages/Ecom'));
const Auth = lazy(() => import('./pages/Auth'));

function AppContent() {
  const location = useLocation();
  const isEcommercePage = location.pathname === '/ecommerce';
  const isAuthPage = location.pathname === '/auth';
  const isContactPage = location.pathname === '/contact';

  // Always scroll to top on route change (mobile & desktop)
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
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
      {!isEcommercePage && !isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ecommerce" element={<Ecommerce/>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
  {!isEcommercePage && !isAuthPage && !isContactPage && <Footer />}
    </Suspense>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
