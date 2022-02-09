import React, { useState } from "react";
import ItemsQty from "./ItemsQty";
import "./styles.scss";
import TheaterResult from "./TheaterResult";


export default function Theater(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [eventItems, setEventItems] = useState('');
  const [itemConsume, setItemConsume] = useState(1)
  const [loadResults, setLoadResults] = useState(false);

  const difference = targetPoint - currentPoint;

  const eventSongPlays = (items) => {
    if (items === 720) {
      return (difference / 2148);
    } else if (items === 360) {
      return (difference / 1074);
    } else if (items === 180) {
      return (difference / 537);
    }
  }

  const regularSongPlays = (items) => {
    if (items === 720) {
      return ((eventSongPlays(720) * 720) - eventItems) / 595;
    } else if (items === 360) {
      return ((eventSongPlays(360) * 360) - eventItems) / 595;
    } else if (items === 180) {
      return ((eventSongPlays(180) * 180) - eventItems) / 595;
    }
  }

  const clear = () => {
    setCurrentPoint('');
    setTargetPoint('');
    setEventItems('');
    setLoadResults(false);
  }


  return (
    <div className="main-container">
      <span className="title">Platinum Star Theater Event Calculator</span>
      <form
        id="pstrust-calc"
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
            <ItemsQty item={180} setItem={() => setItemConsume(180)} />
            <ItemsQty item={360} setItem={() => setItemConsume(360)} />
            <ItemsQty item={720} setItem={() => setItemConsume(720)} />
          </div>
        </div>
        <div className="buttons">
          <button className="buttons-clear" onClick={clear}>Clear</button>
          <button className="buttons-calc" onClick={() => setLoadResults(true)}>Calculate</button>
        </div>
      </form>
      <TheaterResult
        load={loadResults}
        difference={difference}
        eventSongPlays={eventSongPlays(itemConsume)}
        regularSongPlays={regularSongPlays(itemConsume)}
      />
    </div>
  )
}