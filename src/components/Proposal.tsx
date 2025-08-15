// src/components/Proposal.tsx
import React, { useState, useEffect } from 'react';
import FadeIn from './animations/FadeIn';

interface ProposalProps {
  onYes: () => void;
}

const Proposal: React.FC<ProposalProps> = ({ onYes }) => {
  const [showRing, setShowRing] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowRing(true), 6000);
  }, []);

  return (
    <div className="screen proposal">
      <div className="proposal-content">
        <FadeIn delay={1}>
          <p>So I have a question...</p>
        </FadeIn>
        
        <FadeIn delay={2}>
          <p>The most important one yet.</p>
        </FadeIn>
        
        <FadeIn delay={3} duration={2}>
          <h1 className="proposal-question">
            Will you marry me?
          </h1>
        </FadeIn>
        
        {showRing && (
          <div className="ring-box">
            💍
          </div>
        )}
        
        <FadeIn delay={7}>
          <button onClick={onYes} className="yes-button">
            YES! 💕
          </button>
        </FadeIn>
      </div>
    </div>
  );
};

export default Proposal;