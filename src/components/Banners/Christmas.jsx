import React from "react";
import getRandom from "../../helpers/getRandom";
import { christmas } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function Christmas(props) {
  const christmasImgs = Object.values(christmas);


  return (
    <div className="holiday-banner">
      <p className="title">Merry Christmas!</p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={christmasImgs[getRandom(6)]}
      />
    </div>
  );
};