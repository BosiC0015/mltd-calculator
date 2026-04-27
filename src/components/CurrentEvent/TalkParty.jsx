import React from "react";
import currentEventBanner from "../../assets/images/event_banner/current.jpeg"
import CountdownContainer from "../Countdown";
import "../Banners/banners.scss";
import "./event.scss";


export default function TalkParty() {
  return (
    <div className="event">
      {/* <p>Current Event: Million Live TalkParty</p> */}
      <p className="event-title"><b>THEATER TALK PARTY☆<br></br>～ユニットオフショット Vol.62～</b></p>
      <p>Time Remaining: </p>
      <CountdownContainer endTime="2026-04-30T23:59:59.000+09:00" />
      <img className="banner" alt="THEATER TALK PARTY Event" src={currentEventBanner} />
    </div>
  );
};