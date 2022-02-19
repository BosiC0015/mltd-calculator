import React from "react";
import getRandom from "../../helpers/getRandom";
import { valentine } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function Valentine(props) {
  const valentineImgs = Object.values(valentine);


  return (
    <div className="holiday-banner">
      <p className="title">🍫Happy Valentine!🍫</p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={valentineImgs[getRandom(4)]}
      />
    </div>
  );
};