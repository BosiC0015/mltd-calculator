import React from "react";
import getRandom from "../../helpers/getRandom";
import { valentine } from "../../helpers/holidayBanners";
import "./banners.scss";


export default function Valentine(props) {
  const valentineImgs = Object.values(valentine);


  return (
    <div className="holiday-banner">
      <p className="title"><span role="img" aria-label="chocolate bar">🍫</span>Happy Valentine!<span role="img" aria-label="chocolate bar">🍫</span></p>
      <img
        className="banner"
        alt="mltd anniversary banner"
        src={valentineImgs[getRandom(5)]}
      />
    </div>
  );
};