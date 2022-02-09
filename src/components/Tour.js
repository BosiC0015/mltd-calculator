import React, { useState } from "react";
import ItemsQty from "./ItemsQty";
import TourResult from "./TourResult";
import "./styles.scss";


export default function Tour(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [eventItems, setEventItems] = useState('');
  const [itemConsume, setItemConsume] = useState(1);
  const [loadResults, setLoadResults] = useState(false);

  const difference = targetPoint - currentPoint;

  const eventSongPlays = (items) => {
    if (items === 3) {
      return difference / 2160;
    } else if (items === 2) {
      return difference / 1440;
    } else if (items === 1) {
      return difference / 720;
    };
  };
  
  const clear = () => {
    setCurrentPoint('');
    setTargetPoint('');
    setEventItems('');
    setItemConsume(1);
    setLoadResults(false);
  };


  return (
    <div className="main-container">
      <p className="title">Platinum Star Tour Event Calculator</p>
      <form
        id="pstour-calc"
        autoComplete="off"
        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
        onSubmit={e => e.preventDefault()}
      >
        <div className="form-input">
            <label>Current Point</label>
            <input
              className="form-input__input"
              placeholder="0"
              value={currentPoint}
              onChange={(event) => setCurrentPoint(event.target.value)}
            />
        </div>
        <div className="form-input">
          <label>Target Point</label>
          <input
            className="form-input__input"
            placeholder="0"
            value={targetPoint}
            onChange={(event) => setTargetPoint(event.target.value)}
          />
        </div>
        <div className="form-input">
          <label>Event Items</label>
          <input
            className="form-input__input"
            placeholder="0"
            value={eventItems}
            onChange={(event) => setEventItems(event.target.value)}
          />
        </div>
        <div className="event-item-qty">
          <label>How many event items do you use:</label>
          <div className="event-item-qty-buttons">
            <ItemsQty item={1} setItem={() => setItemConsume(1)} />
            <ItemsQty item={2} setItem={() => setItemConsume(2)} />
            <ItemsQty item={3} setItem={() => setItemConsume(3)} />
          </div>
        </div>
        <div className="buttons">
          <button className="buttons-clear" onClick={clear}>Clear</button>
          <button className="buttons-calc" onClick={() => setLoadResults(true)}>Calculate</button>
        </div>
      </form>
      <TourResult
        load={loadResults}
        difference={difference}
        eventSongPlays={eventSongPlays(itemConsume)}
      />
    </div>
  );
};