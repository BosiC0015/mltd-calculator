import React from 'react';
import Header from './components/Navigators/Header';
import Sidebar from './components/Navigators/Sidebar';
import Welcome from './components/Welcome';
import Theater from './components/Theater';
import Tour from './components/Tour/Tour';
import TwinStage from './components/TwinStage';
import Tune from './components/Tune/Tune';
import Tale from './components/Tale/Tale';
import Treasure from './components/Treasure';
import Trust from './components/Trust';
import Time from './components/Time';
import useVisualMode from './hooks/useVisualHook';
import './App.scss';

export default function App() {
  // add modes for rendering event page components
  const WELCOME = 'WELCOME';
  const THEATER = 'THEATER';
  const TOUR = 'TOUR';
  const TWINSTAGE = 'TWINSTAGE';
  const TUNE = 'TUNE';
  const TALE = 'TALE';
  const TREASURE = 'TREASURE';
  const TRUST = 'TRUST';
  const TIME = 'TIME';
  const { mode, transition } = useVisualMode(WELCOME);

  const select = (event) => {
    transition(event);
  }
  
  return (
    <div className="App">
      <Header select={select} />
      <Sidebar select={select} />
      {mode === WELCOME && <Welcome />}
      {mode === THEATER && <Theater />}
      {mode === TOUR && <Tour />}
      {mode === TWINSTAGE && <TwinStage />}
      {mode === TUNE && <Tune />}
      {mode === TALE && <Tale />}
      {mode === TREASURE && <Treasure />}
      {mode === TRUST && <Trust />}
      {mode === TIME && <Time />}
    </div>
  );
}