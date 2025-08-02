// src/components/Celebration.tsx
import React from 'react';
import SlideIn from './animations/SlideIn';
import FadeIn from './animations/FadeIn';

const Celebration: React.FC = () => (
  <div className="screen celebration">
    <SlideIn from="bottom">
      <h1>She said YES! 🎉</h1>
    </SlideIn>
    
    <FadeIn delay={1}>
      <p>This is just the beginning.</p>
    </FadeIn>
    
    <FadeIn delay={2}>
      <p className="forever">
        I love you forever. 💍❤️
      </p>
    </FadeIn>
  </div>
);

export default Celebration;