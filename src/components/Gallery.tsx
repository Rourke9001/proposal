// src/components/Gallery.tsx
import React from 'react';
import SlideIn from './animations/SlideIn';
import FadeIn from './animations/FadeIn';
import ProgressiveImage from './ProgressiveImage';

interface GalleryProps {
  onNext: () => void;
}

const Gallery: React.FC<GalleryProps> = ({ onNext }) => {
  const images = [
    "/assets/images/memory1.jpg",
    "/assets/images/memory2.jpg",
    "/assets/images/memory3.jpg",
    "/assets/images/memory4.jpg",
    "/assets/images/memory5.jpg",
    "/assets/images/memory6.jpg"
  ];

  return (
    <div className="screen gallery">
      <SlideIn from="top">
        <h2>Our Journey Together 📸</h2>
      </SlideIn>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div className="gallery-item">
              <ProgressiveImage src={img} alt={`Memory ${index + 1}`} />
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={1}>
        <button onClick={onNext} className="next-button">
          Just One More Thing... →
        </button>
      </FadeIn>
    </div>
  );
};

export default Gallery;