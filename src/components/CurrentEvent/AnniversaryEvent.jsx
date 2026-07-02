import React from "react";
import currentEventBanner from "../../assets/images/event_banner/current.jpeg"
import CountdownContainer from "../Countdown";
import "./event.scss";


export default function AnnivEvent() {
  return (
    <div className="event">
          <p className="event-title" lang="jp">9周年記念イベント『最上級：Invit@tion!』</p>
          <div className="countdown">
            <p className="event-time">Time Remaining: </p>
            <CountdownContainer endTime="2026-07-12T23:59:59.000+09:00" />
          </div>
          <img className="banner" alt="event" src={currentEventBanner} />
        </div>
  );
};