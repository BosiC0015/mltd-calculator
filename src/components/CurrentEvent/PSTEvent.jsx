import React from "react";
import "../Banners/banners.scss";
import "./event.scss";
import CountdownContainer from "../Countdown";


export default function PSTEvent() {
  return (
    <div className="event">
      {/* <p className="event-current">CURRENT EVENT</p> */}
      <p className="event-title"><b>プラチナスターシアター<br></br>～カワラナイモノ～</b></p>
      <p className="event-time">Time Remaining: </p>
      <CountdownContainer endTime="2026-03-09T20:59:59.000+09:00" />
      {/* <div className="event-essentials"> */}
        {/* <p>🔺Ranking SR: Mami</p> */}
        {/* <p>🔸Point SR: Ayumu</p> */}
        {/* <p>🔹Participating: Elena, Subaru</p> */}
      {/* </div> */}
      <img 
        className="banner" 
        alt="event" 
        src="https://cmsapi-frontend.idolmaster-official.jp/sitern/api/idolmaster/Image/get?path=/idolmaster/jp/article/1001/2026/02/t4IxCMhjWBNFx2S4UquuVf6vOCbycJDp.jpeg"
      />
    </div>
  );
};