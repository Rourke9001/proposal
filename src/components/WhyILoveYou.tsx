// src/components/WhyILoveYou.tsx
import React from 'react';
import SlideIn from './animations/SlideIn';
import FadeIn from './animations/FadeIn';

interface WhyILoveYouProps {
  onNext: () => void;
}

const WhyILoveYou: React.FC<WhyILoveYouProps> = ({ onNext }) => {
  const reasons = [
    "You laugh at my worst jokes 😄",
    "You're my calm in every storm 🌊",
    "You're home to me 🏠",
    "You make ordinary moments magical ✨",
    "You believe in my dreams 🌟",
    "You're my best friend 👫",
    "You make me want to be better 💪",
    "You're simply... you 💕"
  ];

  return (
    <div className="screen why-i-love-you">
      <SlideIn from="top">
        <h2>Why I Love You 💖</h2>
      </SlideIn>
      
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <FadeIn key={index} delay={index * 0.3}>
            <div className="reason">
              <span className="heart">❤️</span> {reason}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={reasons.length * 0.3 + 0.5}>
        <button onClick={onNext} className="next-button">
          Continue →
        </button>
      </FadeIn>
    </div>
  );
};

export default WhyILoveYou;