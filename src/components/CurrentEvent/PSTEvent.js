import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Theater: ゲキテキ！ムテキ！恋したい！</p>
        <p>Time Remaining: <Countdown date="2022-10-09T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Roco</p>
          <p>🔸Point SR: Iku</p>
          <p>🔹Participating: Elena</p>
        </div>
        <img className="banner" alt="event" src="https://pbs.twimg.com/media/FdzftT0UcAAZ_7Y?format=png&name=900x900" />
    </div>
  );
};