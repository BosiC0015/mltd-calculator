import React from "react";
import CountdownContainer from "../Countdown";
import "../Banners/banners.scss";
import "./event.scss";


export default function TalkParty() {
  return (
    <div className="event">
      {/* <p>Current Event: Million Live TalkParty</p> */}
      <p className="event-title"><b>THEATER TALK PARTY☆<br></br>～ユニットオフショット Vol.59～</b></p>
      <p>Time Remaining: </p>
      <CountdownContainer endTime="2026-01-30T23:59:59.000+09:00" />
      <img className="banner" src="https://pbs.twimg.com/media/G_OsNLrboAAjldl?format=jpg&name=large" alt="talk-party-event" />
    </div>
  );
};