// src/components/animations/SlideIn.tsx
import React, { useState, useEffect } from 'react';

interface SlideInProps {
  children: React.ReactNode;
  delay?: number;
  from?: 'left' | 'right' | 'top' | 'bottom';
}

const SlideIn: React.FC<SlideInProps> = ({ children, delay = 0, from = 'bottom' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    if (!isVisible) {
      switch (from) {
        case 'left': return 'translateX(-100px)';
        case 'right': return 'translateX(100px)';
        case 'top': return 'translateY(-100px)';
        default: return 'translateY(100px)';
      }
    }
    return 'translate(0)';
  };

  return (
    <div
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: 'all 1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default SlideIn;