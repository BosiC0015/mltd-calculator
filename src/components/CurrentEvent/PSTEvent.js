import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Theater: Sweet Sweet Soul</p>
        <p>Time Remaining: <Countdown date="2023-03-9T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Akane</p>
          <p>🔸Point SR: Tamaki</p>
          <p>🔹Participating: Serika</p>
        </div>
        <img className="banner" alt="event" src="https://pbs.twimg.com/media/Fp8veEfaMAAhtCG?format=png&name=900x900" />
    </div>
  );
};