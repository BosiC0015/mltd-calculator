import React from "react";
import "../Banners/banners.scss";
import "./event.scss";
import CountdownContainer from "../Countdown";
import currentEventBanner from "../../assets/images/event_banner/current.jpeg"


export default function PSTEvent() {
  return (
    <div className="event">
      {/* <p className="event-current">CURRENT EVENT</p> */}
      <p className="event-title"><b>プラチナスターシアター<br></br>～カワラナイモノ～</b></p>
      <p className="event-time">Time Remaining: </p>
      <CountdownContainer endTime="2026-03-09T20:59:59.000+09:00" />
      {/* <div className="event-essentials"> */}
        {/* <p>🔺Ranking SR: Mami</p> */}
        {/* <p>🔸Point SR: Ayumu</p> */}
        {/* <p>🔹Participating: Elena, Subaru</p> */}
      {/* </div> */}
      <img 
        className="banner" 
        alt="event" 
        src={currentEventBanner}
      />
    </div>
  );
};