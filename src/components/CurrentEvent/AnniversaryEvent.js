import React from "react";
import "../Banners/banners.scss";
import CountdownContainer from "../Coutdown";


export default function AnnivEvent() {
  return (
    <div className="event">
      <p className="event-title">8th Anniversary Event: 超々∞MUGEND@I!</p>
        <p className="event-time">Time Remaining: </p>
          <CountdownContainer endTime="2025-07-12T20:59:59.000+09:00" />
        <img 
          className="banner" 
          alt="event" 
          src="https://pbs.twimg.com/media/Gub4RoNa0AAudnW?format=png&name=900x900" 
        />
    </div>
  );
};