import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function MilliColle() {
  return (
    <div>
      <p>Current Event: Millionlive Collection</p>
      <p>Time Remaining: <Countdown date="2023-09-15T20:59:59.000+09:00" /></p>
      <div className="event-essentials">
        <p>🔸SR1: Miki</p>
        <p>🔸SR2: Rio</p>
        <p>🔹R: Minako</p>
      </div>
      <img className="banner" src="https://pbs.twimg.com/media/F5Y9lhJbcAAp_yk?format=png&name=900x900" alt="event" />
    </div>
  );
};