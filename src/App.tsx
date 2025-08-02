import React, { useState } from 'react';
import Landing from './components/Landing';
import FirstMemory from './components/FirstMemory';
import Milestones from './components/Milestones';
import WhyILoveYou from './components/WhyILoveYou';
import Gallery from './components/Gallery';
import SlowBuild from './components/SlowBuild';
import Proposal from './components/Proposal';
import Celebration from './components/Celebration';
import Confetti from './components/Confetti';
import AudioManager from './utils/audioManager';
import './App.css';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  // Start music on first interaction
  const startMusic = () => {
    if (!musicStarted) {
      AudioManager.play();
      setMusicStarted(true);
    }
  };

  const nextScreen = () => {
    startMusic();
    setCurrentScreen(prev => prev + 1);
  };

  const handleYes = () => {
    setShowConfetti(true);
    nextScreen();
  };

  const screens = [
    <Landing key="landing" onNext={nextScreen} />,
    <FirstMemory key="first" onNext={nextScreen} />,
    <Milestones key="milestones" onNext={nextScreen} />,
    <WhyILoveYou key="why" onNext={nextScreen} />,
    <Gallery key="gallery" onNext={nextScreen} />,
    <SlowBuild key="build" onNext={nextScreen} />,
    <Proposal key="proposal" onYes={handleYes} />,
    <Celebration key="celebration" />
  ];

  return (
    <div className="app">
      {showConfetti && <Confetti />}
      <div className="screen-container">
        {screens[currentScreen]}
      </div>
    </div>
  );
};

export default App;