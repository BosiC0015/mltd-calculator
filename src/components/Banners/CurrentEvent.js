import React from "react";
import Countdown from "react-countdown";
import "./banners.scss";


export default function CurrentEvent() {
  return (
    <div>
      <p>Current Event: MillionLive Collection</p>
      <Countdown date="2022-04-30T23:59:59.000+09:00" />
      {/* <div className="event-essentials">
        <p>🔺Ranking SR: Noriko</p>
        <p>🔸Point SR: Arisa</p>
        <p>🔹Participating: Chihaya, Sayoko, Reika</p>
      </div> */}
      <img className="banner" src="https://pbs.twimg.com/media/FRKPFb-UcAEB-sI?format=png&name=900x900" alt="event" />
    </div>
  )
}