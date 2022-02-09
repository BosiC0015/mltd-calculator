import React from 'react';
import Trust from './components/Trust';
import './App.scss';

export default function App() {
  // need to add modes
  
  return (
    <div className="App">
      <a href='#click' className='menu'>  
        <span className='menu-title'>Choose Event Type</span>
        <ul className='menu-dropdown'>
          <li onClick={() => console.log('theater')}>PSTheater</li>
          <li onClick={() => console.log('tour')}>PSTour</li>
          <li onClick={() => console.log('twin stage')}>PSTwinStage</li>
          <li onClick={() => console.log('tune')}>PSTune</li>
          <li onClick={() => console.log('tale')}>PSTale</li>
          <li onClick={() => console.log('treasure')}>PSTreaure</li>
          <li onClick={() => console.log('trust')}>PSTrust</li>
        </ul>
      </a>
      <Trust />
    </div>
  );
}