import React from "react";
import currentEventBanner from "../../assets/images/event_banner/current.jpeg"
import CountdownContainer from "../Countdown";
import "./event.scss";


export default function PSTEvent() {
  return (
    <div className="event">
      <img className="banner" alt="event" src={currentEventBanner} />
      <p className="event-title" lang="jp">
        プラチナスターツアービンゴ<br></br>
        ～ Prima Princess!! ～
      </p>
      <p className="event-title en-alt">
        Platinum Star Tour BINGO<br></br>
        ～ Prima Princess!! ～
      </p>
      <div className="countdown">
        <p className="event-time">Time Remaining: </p>
        <CountdownContainer endTime="2026-03-09T20:59:59.000+09:00" />
      </div>
    </div>
  );
};