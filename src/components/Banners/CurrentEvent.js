import React from "react";
import "./banners.scss";


export default function CurrentEvent() {
  return (
    <div>
      <p>Current Event: PSTune: Omide wa Cleasky</p>
      <div className="event-essentials">
        <p>🔺Ranking SR: Miya</p>
        <p>🔸Point SR: Elena</p>
        <p>🔹Participating: /</p>
      </div>
      <img className="banner" src="https://pbs.twimg.com/media/FPJfRonaUAEIcfR?format=jpg&name=medium" alt="event" />
    </div>
  )
}