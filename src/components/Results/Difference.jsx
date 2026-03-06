import React from "react";
import "../styles.scss";


export default function Difference(props) {
  return (
    <div className="result">
      <p>You still have {props.difference} points to go.</p>
    </div>
  );
};