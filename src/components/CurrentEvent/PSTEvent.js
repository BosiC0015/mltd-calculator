import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div className="event">
      <p className="event-current">CURRENT EVENT</p>
      <p className="event-title">Platinum Star Theater : U・N・M・E・I ライブ</p>
        <p className="event-time">Time Remaining: <Countdown date="2025-06-07T20:59:59.000+09:00" /></p>
        {/* <div className="event-essentials"> */}
          {/* <p>🔺Ranking SR: Mami</p> */}
          {/* <p>🔸Point SR: Ayumu</p> */}
          {/* <p>🔹Participating: Elena, Subaru</p> */}
        {/* </div> */}
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/Gr3RO9zXUAE7Rtk?format=png&name=900x900" 
        />
    </div>
  );
};