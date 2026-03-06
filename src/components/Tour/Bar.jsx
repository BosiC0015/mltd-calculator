import React from "react";
import "./Progress.scss";


export default function Bar(props) {
  const barClass = (selected) => {
    if (selected) {
      return 'bar-selected';
    };
    return 'bar';
  };

  return (
    <button className={barClass(props.selected)} />
  );
};