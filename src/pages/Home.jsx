import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="home">
      {/* Animated Background */}
      <div className="animated-bg">
        <svg className="string-art-bg" width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="none" aria-hidden="true">
          <g strokeWidth="2">
            <line x1="0" y1="0" x2="1200" y2="800" stroke="#b7e3ed" />
            <line x1="0" y1="800" x2="1200" y2="0" stroke="#d8f6f0" />
            <line x1="600" y1="0" x2="600" y2="800" stroke="#faf8f1" />
            <line x1="0" y1="400" x2="1200" y2="400" stroke="#b7e3ed" />
            <line x1="300" y1="0" x2="900" y2="800" stroke="#d8f6f0" />
            <line x1="900" y1="0" x2="300" y2="800" stroke="#faf8f1" />
          </g>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text-with-image" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
            <div className="hero-text" style={{ flex: '1 1 320px', minWidth: '260px' }}>
              <h1 className="hero-title">
                <span className="title-line">Welcome to the</span>
                <span className="title-highlight">Kawaii Art World!</span>
                <span className="title-emoji">🌈</span>
              </h1>
              <p className="hero-subtitle" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.8rem', fontStyle: 'italic' }}>
                " Crafting Dreams, One Thread at a Time. "
              </p>
              <div className="hero-buttons">
                <a href="/gallery" className="btn btn-primary">
                  <span>View Gallery</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="/shop" className="btn btn-secondary">
                  <span>Shop Now</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                </a>
                <a href="/contact" className="btn btn-outline">
                  <span>Contact Us</span>
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Removed small logo image beside hero text */}
          </div>
          <div className="hero-visual">
            <div className="floating-logo-container">
              <img
                src="/kawaiiarts logo.jpg"
                alt="Kawaiiarts Logo Floating"
                className="floating-logo-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Large KawaiiArts background text styled like Contact page, always at the bottom */}
      <h1
        aria-hidden="true"
        className="kawaiiarts-bg-text"
      >
        KawaiiArts
      </h1>

      {/* Features Grid */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Handcrafted</h3>
            <p>Each piece is carefully crafted with love and attention to detail</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌈</div>
            <h3>Colorful</h3>
            <p>Vibrant colors that bring joy and positivity to your space</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3>Unique</h3>
            <p>One-of-a-kind designs that reflect your personality</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>Free shipping across India for all orders</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Kawaiiarts Studio</h2>
            <p className="about-description">
              Kawaiiarts Studio is dedicated to bringing a touch of cuteness and creativity into your life.
              Our handcrafted string art pieces are designed to brighten your space and spark joy,
              blending playful designs with vibrant colors. Discover unique, heartwarming art made with passion and care!
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">100+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Unique Designs</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Support</span>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-placeholder">
              <span>🎨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Business Info Section */}
      <section className="business-info">
        <div className="business-content" data-aos="fade-up">
          <div className="business-header">
            <h2 className="business-name">Kawaiiarts_16</h2>
            <h3 className="business-type">String Art Studio</h3>
          </div>
          <div className="business-details">
            <p className="tagline">We craft memories that last for a lifetime.</p>
            <div className="business-highlights">
              <div className="highlight">
                <span className="highlight-icon roll-on-hover">⏰</span>
                <span className="highlight-text">DM us 10 days in advance for custom orders</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon roll-on-hover">🚚</span>
                <span className="highlight-text">Free shipping all over India 🍀</span>
              </div>
              <div className="highlight">
                <span className="highlight-icon roll-on-hover">💬</span>
                <span className="highlight-text">Personalized customer support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="cta-content" data-aos="fade-up" data-aos-delay="150">
          <h2>Ready to add some Kawaii Art to your life?</h2>
          <p>Start your journey with our beautiful string art creations</p>
          <div className="cta-buttons">
            <a href="/gallery" className="btn btn-primary">Explore Gallery</a>
            <a href="/contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
