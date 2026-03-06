import React from "react";
import "../styles.scss";


export default function TourRegularPlays(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  };
  return (
    <div className="result">
      <p>You still need to play {props.regularPlays} times regular songs,</p>
      <p>or work {props.regularPlays} times.</p>
    </div>
  );
};