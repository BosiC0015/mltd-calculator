import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Treasure: 空色♡ Birthday Card</p>
        <p>Time Remaining: <Countdown date="2022-05-25T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Julia</p>
          <p>🔸Point SR: Sayoko</p>
          <p>🔹Participating: Haruka, Chihaya, Yayoi, Minako, Anna, Yuriko, Arisa, Tomoka, Kana, Noriko, Reika</p>
        </div>
        <img className="banner" src="https://pbs.twimg.com/media/FSmydeBUEAAdT2u?format=png&name=900x900" alt="event" />
    </div>
  );
};