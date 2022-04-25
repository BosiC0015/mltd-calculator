import React from "react";
import Difference from "../Results/Difference";
import EventSongPlays from "../Results/EventSongPlays";


export default function TaleResults(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  };

  return (
    <div className="result">
      <h5>Here are your results:</h5>
      <Difference
        difference={props.difference}
      />
      <EventSongPlays
        eventSongPlays={props.eventSongPlays}
      />
      <div className="result">
      <p>You still need to work {props.workTimes} times.</p>
    </div>
    </div>
  );
};