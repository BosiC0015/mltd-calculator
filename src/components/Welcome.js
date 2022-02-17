import React from "react";
import getRandom from "../helpers/getRandom";
import Anniversaries from "./HolidayBanners/Anniversaries";
import Christmas from "./HolidayBanners/Christmas";
import MLAnniversaries from "./HolidayBanners/MLAnniversaries";
import Valentine from "./HolidayBanners/Valentine";
import WhiteDays from "./HolidayBanners/WhiteDays";
import { miniCharas } from "../helpers/miniCharas";
import useVisualMode from "../hooks/useVisualHook";


export default function Welcome(props) {
  const NORMAL = 'NORMAL';
  const ANNIVERSARY = 'ANNIVERSARY';
  const CHRISTMAS = 'CHRISTMAS';
  const MLANNIVERSARY = 'MLANNIVERSARY';
  const VALENTINE = 'VALENTINE';
  const WHITEDAY = 'WHITRDAY';
  const { mode } = useVisualMode(VALENTINE);


  const miniCharaImgs = Object.values(miniCharas)
  
  return (
    <div className="main-container">
      {/* Welcome Page */}
      <p className="title">Welcome to MLTD Calculator</p>
      <img alt="random mini chara" src={miniCharaImgs[getRandom(39)]} />
      
      {/* Holiday Banners */}
      {mode === ANNIVERSARY && <Anniversaries />}
      {mode === CHRISTMAS && <Christmas />}
      {mode === MLANNIVERSARY && <MLAnniversaries />}
      {mode === VALENTINE && <Valentine />}
      {mode === WHITEDAY && <WhiteDays />}
    </div>
  );
};