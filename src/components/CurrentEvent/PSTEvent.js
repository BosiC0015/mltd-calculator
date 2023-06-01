import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div className="event">
      <p className="event-current">CURRENT EVENT</p>
      <p className="event-title">Platinum Star Theater : Legend Girls!!</p>
        <p className="event-time">Time Remaining: <Countdown date="2023-06-07T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Shizuka</p>
          <p>🔸Point SR: Haruka</p>
          <p>🔹Participating: Yuriko, Serika, Tomoka</p>
        </div>
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/FxQ4_E8acAAzKNH?format=png&name=900x900" 
        />
    </div>
  );
};