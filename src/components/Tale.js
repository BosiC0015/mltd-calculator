import React, { useState } from "react";
import "./styles.scss";


export default function Tale(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [loadResults, setLoadResults] = useState(false);

  // set states to default when click on Clear
  const clear = () => {
    setCurrentPoint('');
    setTargetPoint('');
    setLoadResults(false);
  };


  return (
    <div className="main-container">
      <p className="title">Platinum Star Tale Event Calculator</p>
      <form
        id="pstheater-calc"
        autoComplete="off"
        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
        onSubmit={e => e.preventDefault()}
      >
        <div className="form-input">
            <label>Current Point:</label>
            <input
              className="form-input__input"
              placeholder="0"
              value={currentPoint}
              onChange={(event) => setCurrentPoint(event.target.value)}
            />
        </div>
        <div className="form-input">
          <label>Target Point:</label>
          <input
            className="form-input__input"
            placeholder="0"
            value={targetPoint}
            onChange={(event) => setTargetPoint(event.target.value)}
          />
        </div>
        
        <div className="buttons">
          <button className="buttons-clear" onClick={clear}>Clear</button>
          <button className="buttons-calc" onClick={() => setLoadResults(true)}>Calculate</button>
        </div>
      </form>    
    </div>
  );
};