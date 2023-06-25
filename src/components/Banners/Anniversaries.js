import React from "react";
import getRandom from "../../helpers/getRandom";
import { anniversaries } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function Anniversaries(props) {
  const anniversariesImgs = Object.values(anniversaries);


  return (
    <div className="holiday-banner">
      <p className="title">Happy MLTD Anniversary!🎉</p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={anniversariesImgs[getRandom(17)]}
      />
    </div>
  );
};