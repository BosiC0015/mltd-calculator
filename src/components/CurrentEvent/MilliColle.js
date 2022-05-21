import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function MilliColle() {
  return (
    <div>
      <p>Current Event: Millionlive Collection</p>
      <p>Time Remaining: <Countdown date="2022-05-25T20:59:59.000+09:00" /></p>
      <div className="event-essentials">
        <p>🔸SR1: </p>
        <p>🔸SR2: </p>
        <p>🔹R: </p>
      </div>
      <img className="banner" src="" alt="event" />
    </div>
  );
};