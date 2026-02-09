import React from "react";
import "../Banners/banners.scss";
import CountdownContainer from "../Countdown";


export default function MilliColle() {
  return (
    <div>
      <p className="event-title">Current Event: Millionlive Collection</p>
      <p className="event-time">Time Remaining: </p>
      <CountdownContainer endTime="2026-02-14T20:59:59.000+09:00" />
      <div className="event-essentials">
        {/* <p>🔸SR 1: Miki</p> */}
        {/* <p>🔸SR 2: Rio</p> */}
        {/* <p>🔹R: Minako</p> */}
      </div>
      <img className="banner" src="https://pbs.twimg.com/media/HAX56AWagAAHavE?format=jpg&name=large" alt="event" />
    </div>
  );
};