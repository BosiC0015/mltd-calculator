import React from "react";
import getRandom from "../../helpers/getRandom";
import { mlAnniversaries } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function MLAnniversaries(props) {
  const mlAnniversariesImgs = Object.values(mlAnniversaries);


  return (
    <div className="holiday-banner">
      <p className="title">Million Live Anniversary is coming!<span role="img" aria-label="party popper">🎉</span></p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={mlAnniversariesImgs[getRandom(6)]}
      />
    </div>
  );
};