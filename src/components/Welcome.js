import React from "react";
import getRandom from "../helpers/getRandom";
import Anniversaries from "./HolidayBanners/Anniversaries";
import Christmas from "./HolidayBanners/Christmas";
import MLAnniversaries from "./HolidayBanners/MLAnniversaries";
import Valentine from "./HolidayBanners/Valentine";
import WhiteDays from "./HolidayBanners/WhiteDays";
import { miniCharas } from "../helpers/miniCharas";
import useVisualMode from "../hooks/useVisualHook";


export default function Welcome() {
  const NORMAL = 'NORMAL';
  const VALENTINE = 'VALENTINE';
  const MLANNIVERSARY = 'MLANNIVERSARY';
  const WHITEDAY = 'WHITRDAY';
  const ANNIVERSARY = 'ANNIVERSARY';
  const CHRISTMAS = 'CHRISTMAS';

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const setMode = (month, day) => {
    if (month === 2 && day <= 20) {
      return VALENTINE;
    } else if (month === 2 && day > 20) {
      return MLANNIVERSARY;
    } else if (month === 3 && day < 20) {
      return WHITEDAY;
    } else if ((month === 6 && day >= 25) || month === 7 && day < 20) {
      return ANNIVERSARY;
    } else if (month === 12 && day >= 20) {
      return CHRISTMAS;
    } else {
      return NORMAL;
    };
  };

  const currentMode = setMode(month, day);
  const { mode } = useVisualMode(currentMode);

  const miniCharaImgs = Object.values(miniCharas);
  
  
  return (
    <div className="main-container">
      {/* Holiday Banners */}
      {mode === ANNIVERSARY && <Anniversaries />}
      {mode === CHRISTMAS && <Christmas />}
      {mode === MLANNIVERSARY && <MLAnniversaries />}
      {mode === VALENTINE && <Valentine />}
      {mode === WHITEDAY && <WhiteDays />}
      
      {/* Welcome Page */}
      <p className="title">Welcome to MLTD Calculator</p>
      <img alt="random mini chara" src={miniCharaImgs[getRandom(52)]} />
    </div>
  );
};