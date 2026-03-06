import React, { useState } from "react";
import { getDifference, getTheaterEventSongPlays, getTheaterItemsNeeded, getTheaterRegularSongTimes } from "../helpers/calculators";
import ItemsQty from "./ItemsQty";
import Results from "./Results/Result";
import TheaterRegularPlays from "./Results/TheaterRegularPlays";
import "./styles.scss";
import FormInput from "./FormInput";


export default function Theater(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [eventItems, setEventItems] = useState('');
  const [itemConsume, setItemConsume] = useState(180);
  const [loadResults, setLoadResults] = useState(false);

  // calculations
  const theaterPointPerItem = 537 / 180;
  const difference = getDifference(targetPoint, currentPoint);
  const eventSongPlays = getTheaterEventSongPlays(difference, itemConsume);
  const itemsNeeded = getTheaterItemsNeeded(difference, theaterPointPerItem);
  const regularSongPlays = getTheaterRegularSongTimes(itemsNeeded, eventItems);

  // set states to default when click on Clear
  const clear = () => {
    setCurrentPoint('');
    setTargetPoint('');
    setEventItems('');
    setItemConsume(180);
    setLoadResults(false);
  };

  const onChangeCurrentPoint = (event) => setCurrentPoint(event.target.value);
  const onChangeTargetPoint = (event) => setTargetPoint(event.target.value);
  const onChangeEventItems = (event) => setEventItems(event.target.value);


  return (
    <div className="main-container">
      <p className="title">Platinum Star Theater Event Calculator</p>
      <form
        id="pstheater-calc"
        autoComplete="off"
        onKeyDown={e => e.key === 'Enter' && e.preventDefault()}
        onSubmit={e => e.preventDefault()}
      >
        {/* <div className="form-input">
            <label className="form-input__label">Current Point:</label>
            <input
              className="form-input__input"
              placeholder="0"
              value={currentPoint}
              onChange={(event) => setCurrentPoint(event.target.value)}
            />
        </div> */}
        <FormInput label="Current Point: " value={currentPoint} change={onChangeCurrentPoint} />
        {/* <div className="form-input">
          <label className="form-input__label">Target Point:</label>
          <input
            className="form-input__input"
            placeholder="0"
            value={targetPoint}
            onChange={(event) => setTargetPoint(event.target.value)}
          />
        </div> */}
        <FormInput label="Target Point: " value={targetPoint} change={onChangeTargetPoint} />
        {/* <div className="form-input">
          <label className="form-input__label">Event Items:</label>
          <input
            className="form-input__input"
            placeholder="0"
            value={eventItems}
            onChange={(event) => setEventItems(event.target.value)}
          />
        </div> */}
        <FormInput label="Event Items: " value={eventItems} change={onChangeEventItems} />
        <div className="event-item-qty">
          <label>How many event items do you use:</label>
          <div className="event-item-qty-buttons">
            <ItemsQty item={180} setItem={() => setItemConsume(180)} />
            <ItemsQty item={360} setItem={() => setItemConsume(360)} />
            <ItemsQty item={720} setItem={() => setItemConsume(720)} />
          </div>
        </div>
        <Results
          load={loadResults}
          difference={difference}
          eventSongPlays={eventSongPlays}
          itemsNeeded={itemsNeeded}
          />
        <TheaterRegularPlays
          load={loadResults}
          regularPlays={regularSongPlays}
        />
        <div className="buttons">
          <button className="buttons-clear" onClick={clear}>Clear</button>
          <button className="buttons-calc" onClick={() => setLoadResults(true)}>Calculate</button>
        </div>
      </form>
    </div>
  );
};