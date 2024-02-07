import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div className="event">
      {/* <p className="event-current">CURRENT EVENT</p> */}
      <p className="event-title">Platinum Star Team : バトンタッチ</p>
        <p className="event-time">Time Remaining: <Countdown date="2024-02-08T20:59:59.000+09:00" /></p>
        <div className="event-essentials">
          <p>🔺Ranking SR: Sayoko</p>
          <p>🔸Point SR: Serika</p>
          <p>🔹Participating: Miya, Iku, Akane</p>
        </div>
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/GFEDyCvaEAA0XVm?format=png&name=900x900" 
        />
    </div>
  );
};