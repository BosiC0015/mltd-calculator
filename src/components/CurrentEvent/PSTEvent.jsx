import React from "react";
import currentEventBanner from "../../assets/images/event_banner/current.jpeg"
import CountdownContainer from "../Countdown";
import "./event.scss";


export default function PSTEvent() {
  return (
    <div className="event">
      <p className="event-title" lang="jp">
        プラチナスターチューン<br></br>
        ～ パンとフィルム ～
      </p>
      <p className="event-title en-alt">
        Platinum Star Tune<br></br>
        ～ パンとフィルム ～
      </p>
      <div className="countdown">
        <p className="event-time">Time Remaining: </p>
        <CountdownContainer endTime="2026-04-09T20:59:59.000+09:00" />
      </div>
      <img className="banner" alt="event" src={currentEventBanner} />
    </div>
  );
};