import React from "react";
// import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function MilliColle() {
  return (
    <div>
      <p className="event-title">Current Event: Millionlive Collection</p>
      <p className="event-time">Time Remaining: </p>
      <div className="event-essentials">
        {/* <p>🔸SR 1: Miki</p> */}
        {/* <p>🔸SR 2: Rio</p> */}
        {/* <p>🔹R: Minako</p> */}
      </div>
      <img className="banner" src="https://pbs.twimg.com/media/F5Y9lhJbcAAp_yk?format=png&name=900x900" alt="event" />
    </div>
  );
};