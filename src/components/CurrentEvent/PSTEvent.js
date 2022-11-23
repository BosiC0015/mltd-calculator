import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function PSTEvent() {
  return (
    <div>
      <p>Current Event: Platinum Star Theater: ハルカナミライ</p>
        <p>Time Remaining: <Countdown date="2022-11-24T20:59:59.000+09:00" /></p>
        <div className="event-essentials-pst">
          <p>🔺Ranking SR: Kotoha</p>
          <p>🔸Point SR: ROCO</p>
          <p>🔹Participating: Yukiho, Makoto, Iori, Tsubasa, Matsuri, Serika, Nao, Chizuru, Tamaki, Miya, Momoko</p>
        </div>
        <img className="banner" alt="event" src="https://pbs.twimg.com/media/FhCYEvYaMAAVsUY?format=png&name=900x900" />
    </div>
  );
};