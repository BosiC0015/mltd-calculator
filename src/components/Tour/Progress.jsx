import React from "react";
import Bar from "./Bar";
import "./Progress.scss";


export default function Progress(props) {
  const progressArray = Array.from(Array(20).keys());
  const progressObj = {}
  progressArray.forEach(elm => {
    if (elm < props.progress) {
      progressObj[elm] = true;
    } else {
      progressObj[elm] = false;
    };
  });

  const progress = progressArray.map(key => {
    return (
      <Bar key={key} selected={progressObj[key]} />
    );
  });


  return (
    <div className="progress">
      { progress }
    </div>
  );
};