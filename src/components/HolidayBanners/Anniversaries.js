import React from "react";
import getRandom from "../../helpers/getRandom";
import { anniversaries } from "../../helpers/holidayBanners";


export default function Anniversaries(props) {
  const anniversariesImgs = Object.values(anniversaries);


  return (
    <div className="holiday-banner">
      <p className="title">MLTD Anniversary is coming!🎉</p>
      <img
        alt="mltd anniversary banner"
        src={anniversariesImgs[getRandom(10)]}
        width='100%'
      />
    </div>
  );
};