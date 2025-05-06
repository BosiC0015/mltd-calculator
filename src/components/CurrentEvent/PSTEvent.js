import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div className="event">
      {/* <p className="event-current">CURRENT EVENT</p> */}
      <p className="event-title">Platinum Star Theater : Fu-Wa-Du-Wa</p>
        <p className="event-time">Time Remaining: <Countdown date="2025-05-08T20:59:59.000+09:00" /></p>
        <div className="event-essentials">
          <p>🔺Ranking SR: Mami</p>
          <p>🔸Point SR: Ayumu</p>
          <p>🔹Participating: Elena, Subaru</p>
        </div>
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/GpXfWqEbcAAALTb?format=png&name=900x900" 
        />
    </div>
  );
};