import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function Working() {
  return (
    <div>
      <p>Current Event: Million Live Working</p>
        <p>Time Remaining: <Countdown date="2022-05-25T23:59:59.000+09:00" /></p>
        <img className="banner" src="" alt="event" />
    </div>
  );
};