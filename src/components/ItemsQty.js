import React from "react";
import "./styles.scss";


export default function ItemsQty(props) {
  return (
    <div>
      <button className="choose-item-qty" onClick={props.setItem}>{props.item}</button>
    </div>
  )
}