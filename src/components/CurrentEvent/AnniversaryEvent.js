import React from "react";
import Countdown from "react-countdown";
import "../Banners/banners.scss";


export default function AnnivEvent() {
  return (
    <div className="event">
      <p className="event-title">6th Anniversary Event: R@ise a Good Sign!</p>
        <p className="event-time">Time Remaining: <Countdown date="2023-07-12T23:59:59.000+09:00" /></p>
        <img 
          className="banner" 
          alt="event" 
          src="https://cmsapi-frontend.idolmaster-official.jp/sitern/api/idolmaster/Image/get?path=/idolmaster/jp/article/1011/MILLIONLIVE/2023/06/EkNRSsHXuO8rMw464m9aeY5pcHiK8RZX.png" 
        />
    </div>
  );
};