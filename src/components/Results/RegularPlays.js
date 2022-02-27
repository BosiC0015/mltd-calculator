import React from "react";
import "../styles.scss";


export default function RegularPlays(props) {
  return (
    <div className="result">
      <p>You still need to play {props.regularPlays} times regular songs,</p>
      <p>or work {props.regularPlays} times.</p>
    </div>
  );
};