import React from 'react';
import FadeIn from './animations/FadeIn';

interface LandingProps {
  onNext: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNext }) => (
  <div
    className="screen landing"
    style={{
      backgroundImage: 'url(/assets/images/first-photo.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}
  >
    <div className="overlay">
      <FadeIn delay={0.5}>
        <h1>Hi, Poonchels. 💕</h1>
      </FadeIn>
      <FadeIn delay={1}>
        <p>I made something for you. Just tap to begin.</p>
      </FadeIn>
      <FadeIn delay={1.5}>
        <button onClick={onNext} className="cta-button">
          Start the Journey
        </button>
      </FadeIn>
    </div>
  </div>
);

export default Landing;