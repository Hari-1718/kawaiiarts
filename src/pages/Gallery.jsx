import React from 'react';
import art1 from '../assets/gallery/art1.jpg';
import art2 from '../assets/gallery/art2.jpg';
import art3 from '../assets/gallery/art3.jpg';
import art4 from '../assets/gallery/art4.jpg';
import art5 from '../assets/gallery/art5.jpg';
import art6 from '../assets/gallery/art6.jpg';
import art7 from '../assets/gallery/art7.jpg';
import art8 from '../assets/gallery/art8.jpg';
import art9 from '../assets/gallery/art9.jpg';
import art10 from '../assets/gallery/art10.jpg';
import art11 from '../assets/gallery/art11.jpg';
import art12 from '../assets/gallery/art12.jpg';
import art13 from '../assets/gallery/art13.jpg';
import art14 from '../assets/gallery/art14.jpg';
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
          <img src={art10} alt="Kawaii Art 10" />
        </div>
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
          <img src={art11} alt="Kawaii Art 11" />
        </div>
        <div className="gallery-item">
          <img src={art3} alt="Kawaii Art 3" />
        </div>
        <div className="gallery-item">
          <img src={art1} alt="Kawaii Art 1" />
        </div>
        <div className="gallery-item">
          <img src={art6} alt="Kawaii Art 6" />
        </div>
        <div className="gallery-item">
          <img src={art7} alt="Kawaii Art 7" />
        </div>
        <div className="gallery-item">
          <img src={art8} alt="Kawaii Art 8" />
        </div>
        <div className="gallery-item">
          <img src={art9} alt="Kawaii Art 9" />
        </div>
        <div className="gallery-item">
          <img src={art12} alt="Kawaii Art 12" />
        </div>
        <div className="gallery-item">
          <img src={art13} alt="Kawaii Art 13" />
        </div>
        <div className="gallery-item">
          <img src={art14} alt="Kawaii Art 14" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
