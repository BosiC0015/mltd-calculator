import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p className="event-title">Current Event</p>
      <p className="event-title">Platinum Star Theater: Cut. Cut. Cut.</p>
        <p>Time Remaining: <Countdown date="2023-04-10T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Mizuki</p>
          <p>🔸Point SR: Momoko</p>
          <p>🔹Participating: /</p>
        </div>
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/Fsg3lHdacAA_7A4?format=png&name=900x900" 
        />
    </div>
  );
};