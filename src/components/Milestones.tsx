// src/components/Milestones.tsx
import React, { useState } from 'react';
import SlideIn from './animations/SlideIn';

interface MilestonesProps {
  onNext: () => void;
}

interface Milestone {
  title: string;
  image: string;
  text: string;
  detail: string;
}

const Milestones: React.FC<MilestonesProps> = ({ onNext }) => {
  const [currentMilestone, setCurrentMilestone] = useState(0);
  
  const milestones: Milestone[] = [
    {
      title: "First Date 📍",
      image: "/assets/images/first-date.jpg",
      text: "You were nervous. I was too.",
      detail: "But that was a BIG milkshake"
    },
    {
      title: "First Trip ✈️",
      image: "/assets/images/first-trip.jpg",
      text: "Our adventure to Portugal",
      detail: "Where we discovered we're perfect travel buddies."
    },
    {
      title: "Through Good Times 😂",
      image: "/assets/images/laughing.jpg",
      text: "You're the cheese to my provita.",
      detail: "The noodles to my tunafish."
    },
    {
      title: "Through Tough Times 🌧️",
      image: "/assets/images/together.jpg",
      text: "We've grown so much, even through the hard parts.",
      detail: "You make me stronger."
    }
  ];

  const nextMilestone = () => {
    if (currentMilestone < milestones.length - 1) {
      setCurrentMilestone(prev => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="screen milestones">
      <SlideIn key={currentMilestone} from="right">
        <div className="milestone-card">
          <h3>{milestones[currentMilestone].title}</h3>
          <img src={milestones[currentMilestone].image} alt={milestones[currentMilestone].title} />
          <p className="main-text">{milestones[currentMilestone].text}</p>
          <p className="detail">{milestones[currentMilestone].detail}</p>
          <button onClick={nextMilestone} className="next-button">
            {currentMilestone < milestones.length - 1 ? 'Next Memory →' : 'Continue →'}
          </button>
        </div>
      </SlideIn>
    </div>
  );
};

export default Milestones;