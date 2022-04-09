import React, { useState } from "react";
import { getDifference, getTuneEventSongPlays } from "../helpers/calculators";
import ItemsQty from "./ItemsQty";
import TuneResult from "./TuneResult";
import "./styles.scss";


export default function Tune(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [eventItems, setEventItems] = useState('');
  const [itemConsume, setItemConsume] = useState(140);
  const [desk, setDesk] = useState(0);
  const [loadResults, setLoadResults] = useState(false);

  // calculations
  const difference = getDifference(targetPoint, currentPoint);
  const eventSongPlays = getTuneEventSongPlays(itemConsume, desk, difference);

  // desk percent
  const deskArr = Array.from(Array(21).keys());
  const select = deskArr.map(elm => {
    return (
      <option key={elm}>{elm}</option>
    )
  });

  // const eventSongPlays = (items, desk) => {
  //   if (items === 560) {
  //     return difference / (1960 * (1 + desk * 0.01))
  //   } else if (items === 280) {
  //     return difference / (980 * (1 + desk * 0.01))
  //   } else if (items === 140) {
  //     return difference / (490 * (1 + desk * 0.01))
  //   };
  // };

  const regularSongPlays = (items, desk) => {
    if (items === 560) {
      return ((eventSongPlays(560, desk) * 560) - eventItems) / 525;
    } else if (items === 280) {
      return ((eventSongPlays(280, desk) * 280) - eventItems) / 525;
    } else if (items === 140) {
      return ((eventSongPlays(140, desk) * 140) - eventItems) / 525;
    };
  };

  const clear = () => {
    setCurrentPoint('');
    setTargetPoint('');
    setEventItems('');
    setItemConsume(140);
    setDesk(0);
    setLoadResults(false);
  };


  return (
    <div className="main-container">
      <p className="title">Platinum Star Tune Event Calculator</p>
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
        <div className="form-input">
          <label>Your Desk Bonus Percentage</label>
          <select className="form-input__input" onChange={(event) => setDesk(event.target.value)}>
            { select }
          </select>
        </div>
        <div className="event-item-qty">
          <label>How many event items do you use:</label>
          <div className="event-item-qty-buttons">
            <ItemsQty item={140} setItem={() => setItemConsume(140)} />
            <ItemsQty item={280} setItem={() => setItemConsume(280)} />
            <ItemsQty item={560} setItem={() => setItemConsume(560)} />
          </div>
        </div>
        <div className="buttons">
          <button className="buttons-clear" onClick={clear}>Clear</button>
          <button className="buttons-calc" onClick={() => setLoadResults(true)}>Calculate</button>
        </div>
      </form>
      <TuneResult
        load={loadResults}
        difference={difference}
        eventSongPlays={eventSongPlays}
        regularSongPlays={regularSongPlays}
      />
    </div>
  );
};