// src/components/animations/FadeIn.tsx
import React, { useState, useEffect } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, duration = 1 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity ${duration}s ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;