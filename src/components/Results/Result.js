import React from "react";
import Difference from "./Difference";
import EventSongPlays from "./EventSongPlays";
import ItemsNeeded from "./ItemsNeeded";
import RegularPlays from "./RegularPlays";


export default function Results(props) {
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
      <ItemsNeeded
        itemsNeeded={props.itemsNeeded}
      />
    </div>
  );
};