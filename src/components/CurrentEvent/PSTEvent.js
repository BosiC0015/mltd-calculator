import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Trust SP: ようこそミスティック・セレモニー</p>
        <p>Time Remaining: <Countdown date="2022-10-25T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Kana</p>
          <p>🔸Point SR: Tsubasa</p>
          <p>🔹Participating: Mami, Reika, Tomoka</p>
        </div>
        <img className="banner" alt="event" src="https://pbs.twimg.com/media/Fe7HVnTVEAA6Imo?format=png&name=900x900" />
    </div>
  );
};