import React from "react";
import "./banners.scss";


export default function CurrentEvent() {
  return (
    <div>
      <p>Current Event: MillionLive Collection</p>
      {/* <div className="event-essentials">
        <p>🔺Ranking SR: Noriko</p>
        <p>🔸Point SR: Arisa</p>
        <p>🔹Participating: Chihaya, Sayoko, Reika</p>
      </div> */}
      <img className="banner" src="https://pbs.twimg.com/media/FPy7UNnVEAc4brB?format=jpg&name=medium" alt="event" />
    </div>
  )
}