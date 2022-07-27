import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Theater: Understand? Understand!</p>
        <p>Time Remaining: <Countdown date="2022-07-28T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Miki</p>
          <p>🔸Point SR: Ayumu</p>
          <p>🔹Participating: Shizuka, Karen, Iku</p>
        </div>
        <img className="banner" alt="event" src="https://pbs.twimg.com/media/FYBFkn1VsAES98-?format=png&name=900x900" />
    </div>
  );
};