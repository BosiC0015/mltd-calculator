import React from "react";
import "../styles.scss";


export default function EventSongPlays(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  };
  return (
    <div className="result">
      <p>You still need to play {props.eventSongPlays} times event song.</p>
    </div>
  );
};