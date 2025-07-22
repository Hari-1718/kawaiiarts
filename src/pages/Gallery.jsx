import React from 'react';
import art1 from '../assets/gallery/art1.jpg';
import art2 from '../assets/gallery/art2.jpg';
import art3 from '../assets/gallery/art3.jpg';
import art4 from '../assets/gallery/art4.jpg';
import art5 from '../assets/gallery/art5.jpg';
import '../styles/Gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-header">
        <h1>Our Gallery 🎨</h1>
        <p>Browse some of our handmade string art creations — with love and color!</p>
      </div>

      <div className="gallery-grid">
        <div className="gallery-item">
          <img src={art4} alt="Kawaii Art 4" />
        </div>
        <div className="gallery-item">
          <img src={art5} alt="Kawaii Art 5" />
        </div>
        <div className="gallery-item">
          <img src={art2} alt="Kawaii Art 2" />
        </div>
        <div className="gallery-item">
          <img src={art3} alt="Kawaii Art 3" />
        </div>
        <div className="gallery-item">
          <img src={art1} alt="Kawaii Art 1" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
