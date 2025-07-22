import React from 'react';
import '../styles/home.css';

const Home = () => (
  <div className="home">
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
