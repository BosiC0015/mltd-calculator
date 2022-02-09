import React from "react";
import "./styles.scss";


export default function TrustResult(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  }
  return (
    <div className="result">
      <p>(1.5 * points)</p>
      <p>You still have {props.difference} points to go.</p>
      <p>You still need to play {props.eventSongPlays} times event song.</p>
      <p>You still need to play {props.regularSongPlays} times regular songs (using 300 tickets).</p>
    </div>
  )
}