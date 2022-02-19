import React from "react";
import getRandom from "../../helpers/getRandom";
import { whiteDays } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function WhiteDays(props) {
  const whiteDaysImgs = Object.values(whiteDays);


  return (
    <div className="holiday-banner">
      <p className="title">Happy White Days!</p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={whiteDaysImgs[getRandom(3)]}
      />
    </div>
  );
};