import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div className="event">
      {/* <p className="event-current">CURRENT EVENT</p> */}
      <p className="event-title">Platinum Star Team : Unknown Boxの開き方</p>
        <p className="event-time">Time Remaining: <Countdown date="2024-03-08T20:59:59.000+09:00" /></p>
        <div className="event-essentials">
          <p>🔺Ranking SR: Matsuri</p>
          <p>🔸Point SR: Elena</p>
          <p>🔹Participating: Hinata, Emily, Subaru</p>
        </div>
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/GHY_UzZbgAAWmT3?format=png&name=900x900" 
        />
    </div>
  );
};