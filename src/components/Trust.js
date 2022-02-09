import React, { useState } from "react";
import Result from "./Result";
import ItemsQty from "./ItemsQty";
import "./styles.scss";


export default function Trust(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [eventItems, setEventItems] = useState('');
  const [itemConsume, setItemConsume] = useState(180)
  const [loadResults, setLoadREsults] = useState(false);

  const difference = targetPoint - currentPoint;

  const eventSongPlays = (items) => {
    if (items === 720) {
      return (difference / 3222);
    } else if (items === 360) {
      return (difference / 1611);
    } else if (items === 180) {
      return (difference / 806);
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
    setLoadREsults(false);
  }


  return (
    <div>
      <span>Platinum Star Trust Event Calculator</span>
      <form
        id="pstrust-calc"
        autoComplete="off"
        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
        onSubmit={e => e.preventDefault()}
      >
        <div className="form-input">
          <label>Current Point</label>
          <input
            className="current-point__input"
            placeholder="0"
            value={currentPoint}
            onChange={(event) => setCurrentPoint(event.target.value)}
          />
          <label>Target Point</label>
          <input
            className="target-point__input"
            placeholder="0"
            value={targetPoint}
            onChange={(event) => setTargetPoint(event.target.value)}
          />
          <label>Event props</label>
          <input
            className="event-props__input"
            placeholder="0"
            value={eventItems}
            onChange={(event) => setEventItems(event.target.value)}
          />
        </div>
        <div>
          <span>How many event props you use:</span>
          <ItemsQty item={180} setItem={() => setItemConsume(180)} />
          <ItemsQty item={360} setItem={() => setItemConsume(360)} />
          <ItemsQty item={720} setItem={() => setItemConsume(720)} />
        </div>
        <button className="clear" onClick={clear}>Clear</button>
        <button onClick={() => setLoadREsults(true)}>Calculate</button>
      </form>
      <Result
        load={loadResults}
        difference={difference}
        eventSongPlays={eventSongPlays(itemConsume)}
        regularSongPlays={regularSongPlays(itemConsume)}
      />
    </div>
  )
}