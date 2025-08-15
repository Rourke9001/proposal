// src/components/SlowBuild.tsx
import React from 'react';
import FadeIn from './animations/FadeIn';

interface SlowBuildProps {
  onNext: () => void;
}

const SlowBuild: React.FC<SlowBuildProps> = ({ onNext }) => (
  <div className="screen slow-build">
    <div className="stars"></div>
    
    <div className="build-content">
      <FadeIn delay={1}>
        <p>Through everything...</p>
      </FadeIn>
      
      <FadeIn delay={2}>
        <p>we ended up here.</p>
      </FadeIn>
      
      <FadeIn delay={3.5}>
        <p>Right now.</p>
      </FadeIn>
      
      <FadeIn delay={4.5}>
        <p>In this moment.</p>
      </FadeIn>
      
      <FadeIn delay={6}>
        <button onClick={onNext} className="cta-button">
          Look Down 💍
        </button>
      </FadeIn>
    </div>
  </div>
);

export default SlowBuild;