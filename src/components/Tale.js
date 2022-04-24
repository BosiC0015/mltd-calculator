import React, { useState } from "react";
import { getDifference } from "../helpers/calculators";
import TaleResults from "./Results/TaleResults";
import "./styles.scss";


export default function Tale(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [stamina, setStamina] = useState(15);
  const [loadResults, setLoadResults] = useState(false);

  // calculation
  const difference = getDifference(targetPoint, currentPoint);
  const eventSongPlay = (difference) => {
    return difference / 3000;
  }
  const eventSongPlays = eventSongPlay(difference);

  const staminaArray = [15, 20, 25, 30];
  const selectStamina = staminaArray.map(i => {
    return (<option key={i}>{i}</option>);
  });

  const getWorkTimes = (stamina, eventSongPlays) => {
    if (stamina === 30) {
      return eventSongPlays * 6;
    } else if (stamina === 25) {
      return eventSongPlays * 7.5;
    } else if (stamina === 20) {
      return eventSongPlays * 10;
    } else if (stamina === 15) {
      return eventSongPlays * 15
    };
  };
  const workTimes = getWorkTimes(stamina, eventSongPlays);

  console.log(workTimes)

  // set states to default when click on Clear
  const clear = () => {
    setCurrentPoint('');
    setTargetPoint('');
    setStamina(15);
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
        <div className="form-input-special">
          <label>Stamina you consume each time:</label>
          <select
            className="form-input__selection"
            onChange={(event) => setStamina(event.target.value)}
          >{ selectStamina }</select>
        </div>
        <TaleResults
          load={loadResults}
          difference={difference}
          eventSongPlays={eventSongPlays}
          workTimes={workTimes}
        />
        <div className="buttons">
          <button className="buttons-clear" onClick={clear}>Clear</button>
          <button className="buttons-calc" onClick={() => setLoadResults(true)}>Calculate</button>
        </div>
      </form>    
    </div>
  );
};