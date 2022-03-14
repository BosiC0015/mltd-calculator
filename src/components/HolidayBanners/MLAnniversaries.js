import React from "react";
import getRandom from "../../helpers/getRandom";
import { mlAnniversaries } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function MLAnniversaries(props) {
  const mlAnniversariesImgs = Object.values(mlAnniversaries);


  return (
    <div className="holiday-banner">
      <p className="title">Million Live Anniversary is coming!🎉</p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={mlAnniversariesImgs[getRandom(3)]}
      />
    </div>
  );
};