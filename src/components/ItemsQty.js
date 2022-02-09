import React from "react";


export default function ItemsQty(props) {
  return (
    <div>
      <button onClick={props.setItem}>{props.item}</button>
    </div>
  )
}