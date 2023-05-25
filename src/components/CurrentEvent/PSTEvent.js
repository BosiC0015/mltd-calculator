import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p className="event-title">Current Event</p>
      <p className="event-title">Platinum Star Tour: 電波感傷</p>
        <p>Time Remaining: <Countdown date="2023-05-25T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Kaori</p>
          <p>🔸Point SR: Tsumugi</p>
          <p>🔹Participating: /</p>
        </div>
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/FwUcyNmaEAAWg02?format=png&name=900x900" 
        />
    </div>
  );
};