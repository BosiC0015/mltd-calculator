import React from "react";
// import Countdown from "react-countdown";
import "../Banners/banners.scss";
import CountdownContainer from "../Coutdown";


export default function TalkParty() {
  return (
    <div>
      <p>Current Event: Million Live TalkParty</p>
        <p>Time Remaining: </p>
        <CountdownContainer endTime="2022-05-25T23:59:59.000+09:00" />
        <img className="banner" src="" alt="event" />
    </div>
  );
};