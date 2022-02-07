import React from 'react';
import Trust from './components/Trust';
import './App.css';

export default function App() {
  // need to add modes
  
  return (
    <div className="App">
      <div className='select-event'>
        <button onClick={() => console.log('theater')}>PSTheater</button>
        <button onClick={() => console.log('tour')}>PSTour</button>
        <button onClick={() => console.log('tune')}>PSTune</button>
        <button onClick={() => console.log('twin stage')}>PSTwinStage</button>
        <button onClick={() => console.log('tale')}>PSTale</button>
        <button onClick={() => console.log('treasure')}>PSTreaure</button>
        <button onClick={() => console.log('trust')}>PSTrust</button>
      </div>
      <Trust />
    </div>
  );
}