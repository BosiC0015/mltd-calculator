import React from "react";
import currentEventBanner from "../../assets/images/event_banner/current.jpeg"
import CountdownContainer from "../Countdown";
import "../Banners/banners.scss";


export default function MilliColle() {
  return (
    <div id="millicolle" className="event">
      <img className="banner" alt="event" src={currentEventBanner} />
      <p className="event-title">Current Event: MILLIONLIVE COLLECTION</p>
      <div className="countdown">
        <p className="event-time">Time Remaining: </p>
        <CountdownContainer endTime="2026-03-16T20:59:59.000+09:00" />
      </div>
    </div>
  );
};