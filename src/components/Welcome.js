import React from "react";
import CurrentEvent from "./CurrentEvent/CurrentEvent";
import Anniversaries from "./Banners/Anniversaries";
import Christmas from "./Banners/Christmas";
import MLAnniversaries from "./Banners/MLAnniversaries";
import Valentine from "./Banners/Valentine";
import WhiteDays from "./Banners/WhiteDays";
import getRandom from "../helpers/getRandom";
import { miniCharas } from "../helpers/miniCharas";
import useVisualMode from "../hooks/useVisualHook";
import "./styles.scss";


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
    } else if ((month === 6 && day >= 25) || (month === 7 && day < 20)) {
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
      {/* Welcome Page */}
      <div className="welcome">
        <img className="welcome-mini" alt="random mini chara" src={miniCharaImgs[getRandom(52)]} />
        <p className="title">Welcome to MLTD Calculator</p>
        <img className="welcome-mini" alt="random mini chara" src={miniCharaImgs[getRandom(52)]} />
      </div>

      {/* current event */}
      <CurrentEvent />

      {/* Holiday Banners */}
      {mode === ANNIVERSARY && <Anniversaries />}
      {mode === VALENTINE && <Valentine />}
      {mode === WHITEDAY && <WhiteDays />}
      {mode === MLANNIVERSARY && <MLAnniversaries />}
      {mode === CHRISTMAS && <Christmas />}
    </div>
  );
};