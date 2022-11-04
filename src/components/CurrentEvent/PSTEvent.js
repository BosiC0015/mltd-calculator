import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Theater: ハルカナミライ</p>
        <p>Time Remaining: <Countdown date="2022-11-08T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Haruka</p>
          <p>🔸Point SR: Mirai</p>
          <p>🔹Participating: /</p>
        </div>
        <img className="banner" alt="event" src="https://pbs.twimg.com/media/FgIkmg9UUAAo7k9?format=png&name=900x900" />
    </div>
  );
};