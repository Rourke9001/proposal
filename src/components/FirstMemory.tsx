import React from 'react';
import SlideIn from './animations/SlideIn';
import FadeIn from './animations/FadeIn';

interface FirstMemoryProps {
  onNext: () => void;
}

const FirstMemory: React.FC<FirstMemoryProps> = ({ onNext }) => (
  <div className="screen first-memory">
    <SlideIn from="top">
      <h2>Remember when we met? 🌟</h2>
    </SlideIn>
    
    <SlideIn delay={0.5} from="bottom">
      <div className="memory-content">
        <img src="/assets/images/where-we-met.jpg" alt="Where we met" />
        <p>It was at the memorable  floor of C3 Hatfield Studios...</p>
        <p className="thought">My first thought: "Wow, she's incredible."</p>
        <p className="message">(I had also forgotten toilet paper)</p>
      </div>
    </SlideIn>

    <FadeIn delay={1}>
      <button onClick={onNext} className="next-button">
        Continue →
      </button>
    </FadeIn>
  </div>
);

export default FirstMemory;