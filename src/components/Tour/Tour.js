import React, { useState } from "react";
import { getDifference, getTourEventSongPlays, getTourItemsNeeded, getTourRegularSongTimes } from "../../helpers/calculators";
import Progress from "./Progress";
import ItemsQty from "../ItemsQty";
import Results from "../Results/Result";
import "../styles.scss";
import TourRegularPlays from "../Results/TourRegularPlays";


export default function Tour(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [eventItems, setEventItems] = useState('');
  const [progress, setProgress] = useState(0);
  const [itemConsume, setItemConsume] = useState(1);
  const [stamina, setStamina] = useState(15);
  const [loadResults, setLoadResults] = useState(false);

  // create an array with 20 elements, corresponding to the 20-stage progress parameter in game
  // then map to a select array to render as options in the form
  const progressArray = Array.from(Array(20).keys());
  const selectProgress = progressArray.map(i => {
    return (<option key={i}>{i}</option>);
  });

  // create an object with 7 key-value pairs, corresponding to 7 choises of stamina usage in game
  const staminaArray = [15, 20, 25, 30, 40, 50, 60];
  const selectStamina = staminaArray.map(i => {
    return (<option key={i}>{i}</option>);
  });

  // calculations
  const difference = getDifference(targetPoint, currentPoint);
  const eventSongPlays = getTourEventSongPlays(difference, itemConsume);
  const itemsNeeded = getTourItemsNeeded(difference, eventItems);
  const regularSongPlays = getTourRegularSongTimes(itemsNeeded, progress, stamina);
  
  // set states to default when click on Clear
  const clear = () => {
    setCurrentPoint('');
    setTargetPoint('');
    setEventItems('');
    setProgress(0);
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
        <div className="form-input">
          <label>Event Items:</label>
          <input
            className="form-input__input"
            placeholder="0"
            value={eventItems}
            onChange={(event) => setEventItems(event.target.value)}
          />
        </div>
        <div className="form-input-special">
          <label>Your Progress:</label>
          <div className="form-progress">
            <select
              className="form-input__selection"
              onChange={(event) => setProgress(event.target.value)}
            >{ selectProgress }</select>
            <label>/20</label>
          </div>
        </div>
        <Progress progress={progress} />
        <div className="event-item-qty">
          <label>How many event items do you use:</label>
          <label>(assume that only play 5* event songs)</label>
          <div className="event-item-qty-buttons">
            <ItemsQty item={1} setItem={() => setItemConsume(1)} />
            <ItemsQty item={2} setItem={() => setItemConsume(2)} />
            <ItemsQty item={3} setItem={() => setItemConsume(3)} />
          </div>
        </div>
        <div className="form-input-special">
          <label>Stamina you consume each time:</label>
          <select
            className="form-input__selection"
            onChange={(event) => setStamina(event.target.value)}
          >{ selectStamina }</select>
        </div>
        <Results
          load={loadResults}
          difference={difference}
          eventSongPlays={eventSongPlays}
          itemsNeeded={itemsNeeded}
          />
        <TourRegularPlays
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