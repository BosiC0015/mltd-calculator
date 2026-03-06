import React from "react";
import "../styles.scss";


export default function TheaterRegularPlays(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  };
  return (
    <div className="result">
      <p>You still need to play {props.regularPlays} times regular songs with 300 tickets</p>
    </div>
  );
};