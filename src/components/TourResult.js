import React from "react";
import "./styles.scss";


export default function TourResult(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  };
  return (
    <div className="result">
      <p>(5 * event songs)</p>
      <p>You still have {props.difference} points to go.</p>
      <p>You still need to play {props.eventSongPlays} times event song.</p>
    </div>
  );
};