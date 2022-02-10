import React from "react";
import getRandom from "../helpers/getRandom";
import { miniCharas } from "../helpers/miniCharas";


export default function Welcome(props) {
  const miniCharaImgs = Object.values(miniCharas)
  return (
    <div className="main-container">
      {/* Holiday Banners */}
      <p className="title">Welcome to MLTD Calculator</p>
      <img alt="random mini chara" src={miniCharaImgs[getRandom(39)]} />
    </div>
  );
};