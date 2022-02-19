import React from "react";
import getRandom from "../../helpers/getRandom";
import { chiristmas } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function Christmas(props) {
  const chiristmasImgs = Object.values(chiristmas);


  return (
    <div className="holiday-banner">
      <p className="title">Merry Christmas!</p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={chiristmasImgs[getRandom(2)]}
      />
    </div>
  );
};