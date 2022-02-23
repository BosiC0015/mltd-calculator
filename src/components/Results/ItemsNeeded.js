import React from "react";
import "../styles.scss";


export default function ItemsNeeded(props) {
  if (props.load === false) {
    return (<div className="result"></div>);
  };
  return (
    <div className="result">
      <p>You still need {props.itemsNeeded} event items.</p>
    </div>
  );
};