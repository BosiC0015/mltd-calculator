import React from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Theater from './components/Theater';
import Tour from './components/Tour';
import TwinStage from './components/TwinStage';
import Tune from './components/Tune';
import Tale from './components/Tale';
import Treasure from './components/Treasure';
import Trust from './components/Trust';
import useVisualMode from './hooks/useVisualHook';
import './App.scss';

export default function App() {
  // need to add modes
  const WELCOME = 'WELCOME';
  const THEATER = 'THEATER';
  const TOUR = 'TOUR';
  const TWINSTAGE = 'TWINSTAGE';
  const TUNE = 'TUNE';
  const TALE = 'TALE';
  const TREASURE = 'TREASURE';
  const TRUST = 'TRUST';
  const { mode, transition } = useVisualMode(WELCOME);

  const select = (event) => {
    transition(event);
  }
  
  return (
    <div className="App">
      <Header select={select} />
      {mode === WELCOME && <Welcome />}
      {mode === THEATER && <Theater />}
      {mode === TOUR && <Tour />}
      {mode === TWINSTAGE && <TwinStage />}
      {mode === TUNE && <Tune />}
      {mode === TALE && <Tale />}
      {mode === TREASURE && <Treasure />}
      {mode === TRUST && <Trust />}
    </div>
  );
}