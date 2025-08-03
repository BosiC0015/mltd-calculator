import React from "react";
import "../Banners/banners.scss";
import "./event.scss";
import CountdownContainer from "../Countdown";
import CardShowcase from "../Card/CardShowcase";


export default function PSTEvent() {
  return (
    <div className="event">
      <p className="event-current">CURRENT EVENT</p>
      <p className="event-title">Platinum Treasure : ザ・ライブ革命でＳＨＯＷ！</p>
      <p className="event-time">Time Remaining: </p>
      <CountdownContainer endTime="2025-08-08T20:59:59.000+09:00" />
      {/* <div className="event-essentials"> */}
        {/* <p>🔺Ranking SR: Mami</p> */}
        {/* <p>🔸Point SR: Ayumu</p> */}
        {/* <p>🔹Participating: Elena, Subaru</p> */}
      {/* </div> */}
      <img 
        className="banner" 
        alt="event" 
        src="https://pbs.twimg.com/media/Gw_SnRKbUAAggJs?format=png&name=900x900" 
      />
      {/* <CardShowcase 
        cardLink="https://cmsapi-frontend.idolmaster-official.jp/sitern/api/idolmaster/Image/get?path=/idolmaster/jp/article/1001/2025/07/XXRIJv6lhURh3QkgbftSxPx9np1Ypqzk.jpeg"
        cardLinkPlus="https://cmsapi-frontend.idolmaster-official.jp/sitern/api/idolmaster/Image/get?path=/idolmaster/jp/article/1001/2025/07/XJvYaQ4G1QHF9hMBM4beDfhCFOYHFSvH.jpeg"
       /> */}
    </div>
  );
};