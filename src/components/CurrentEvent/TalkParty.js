import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function TalkParty() {
  return (
    <div>
      <p>Current Event: Million Live TalkParty</p>
        <p>Time Remaining: <Countdown date="2022-05-25T23:59:59.000+09:00" /></p>
        <img className="banner" src="" alt="event" />
    </div>
  );
};