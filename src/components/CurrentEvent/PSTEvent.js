import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Theater: ハルカナミライ</p>
        <p>Time Remaining: <Countdown date="2023-01-25T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Minako</p>
          <p>🔸Point SR: Shiho</p>
          <p>🔹Participating: Haruka, Arisa, Ayumu, Miki, Hibiki, Tomoka, Kana, Subaru, Noriko, Sayoko, Tsumugi</p>
        </div>
        <img className="banner" alt="event" src="https://pbs.twimg.com/media/Fmj6c4oaEAETzB1?format=png&name=900x900" />
    </div>
  );
};