import React from "react";
import getRandom from "../../helpers/getRandom";
import { whiteDays } from "../../helpers/holidayBanners";


export default function WhiteDays(props) {
  const whiteDaysImgs = Object.values(whiteDays);


  return (
    <div className="holiday-banner">
      <p className="title">Happy White Days!</p>
      <img
        alt="mltd anniversary banner"
        src={whiteDaysImgs[getRandom(3)]}
        width='100%'
      />
    </div>
  );
};