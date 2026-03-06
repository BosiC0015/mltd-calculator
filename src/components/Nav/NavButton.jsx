import React from "react";
import "./nav.scss";


export default function NavButton(props) {
  // const content = props.content;
  const content = "PST";

  return(
    <button className="nav-button">{content}</button>
  )
}