import React from 'react';
import '../styles/home.css';

const Home = () => (
  <div className="home">
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
    <section className="hero">
      <h1>Welcome to the Kawaii Art World! 🌈</h1>
      <p>
        Spreading joy with cute, colorful art! Explore our soft & adorable creations ✨
      </p>
      <div className="hero-buttons">
        <a href="/gallery" className="btn">View Gallery</a>
        <a href="/shop" className="btn">Shop</a>
        <a href="/contact" className="btn">Contact</a>
      </div>
    </section>

    <section className="about">
      <h2>About Kawaiiarts Studio</h2>
      <p>
        Kawaiiarts Studio is dedicated to bringing a touch of cuteness and creativity into your life. Our handcrafted string art pieces are designed to brighten your space and spark joy, blending playful designs with vibrant colors. Discover unique, heartwarming art made with passion and care!
      </p>
    </section>

    <section className="business-info">
      <h2>Kawaiiarts_16</h2>
      <h3>String Art Studio</h3>
      <p className="tagline">We craft memories that last for a lifetime.</p>
      <p className="note">
        DM us 10 days in advance for custom orders. <br />
        Free shipping all over India 🍀
      </p>
    </section>
  </div>
);

export default Home;
