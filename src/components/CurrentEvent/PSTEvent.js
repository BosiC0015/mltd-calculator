import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Theater: Understand? Understand!</p>
        <p>Time Remaining: <Countdown date="2022-06-07T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Umi</p>
          <p>🔸Point SR: Kotoha</p>
          <p>🔹Participating: /</p>
        </div>
        <img className="banner" src="https://pbs.twimg.com/media/FTv28JBUYAAs49R?format=png&name=900x900" alt="event" />
    </div>
  );
};