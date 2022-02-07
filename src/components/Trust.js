import React, { useState } from "react";
import "./styles.scss";


export default function Trust(props) {
  const [currentPoint, setCurrentPoint] = useState('');
  const [targetPoint, setTargetPoint] = useState('');
  const [eventProps, setEventProps] = useState('');

  const difference = targetPoint - currentPoint;

  const eventSongTimes = (difference / 3222);

  const regularSongTimes = ((eventSongTimes * 720) - eventProps) / 595;

  return (
    <div>
      <span>PSTrust Calculator</span>
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
            value={eventProps}
            onChange={(event) => setEventProps(event.target.value)}
          />
        </div>
        <button onClick={() => console.log('calculate')}>Calculate</button>
      </form>
      <div className="result">
        <p>(1.5 * points)</p>
        <p>You still need {difference} points to go.</p>
        <p>(use 4 * props)</p>
        <p>You still need to play {eventSongTimes} times event song.</p>
        <p>(use 300 tickets)</p>
        <p>You still need to play {regularSongTimes} times regular songs.</p>
      </div>
    </div>
  )
}