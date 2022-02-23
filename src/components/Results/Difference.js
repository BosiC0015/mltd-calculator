import React from "react";
import "../styles.scss";


export default function Difference(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  };
  return (
    <div className="result">
      <p>You still have {props.difference} points to go.</p>
    </div>
  );
};