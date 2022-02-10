import React from "react";
import getRandom from "../../helpers/getRandom";
import { chiristmas } from "../../helpers/holidayBanners";


export default function Anniversaries(props) {
  const chiristmasImgs = Object.values(chiristmas);


  return (
    <div className="holiday-banner">
      <p className="title">Merry Christmas!</p>
      <img
        alt="mltd anniversary banner"
        src={chiristmasImgs[getRandom(2)]}
        width='100%'
      />
    </div>
  );
};