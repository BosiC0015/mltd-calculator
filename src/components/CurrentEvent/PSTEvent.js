import React from "react";
import "../Banners/banners.scss";
import CountdownContainer from "../Countdown";


export default function PSTEvent() {
  return (
    <div className="event">
      <p className="event-current">CURRENT EVENT</p>
      <p className="event-title">Platinum Trust BOT : Hug a nice day!</p>
      <p className="event-time">Time Remaining: </p>
      <CountdownContainer endTime="2025-07-25T20:59:59.000+09:00" />
      {/* <div className="event-essentials"> */}
        {/* <p>🔺Ranking SR: Mami</p> */}
        {/* <p>🔸Point SR: Ayumu</p> */}
        {/* <p>🔹Participating: Elena, Subaru</p> */}
      {/* </div> */}
      <img 
        className="banner" 
        alt="event" 
        src="https://pbs.twimg.com/media/GvzRQb-aMAAXF6v?format=png&name=900x900" 
      />
    </div>
  );
};