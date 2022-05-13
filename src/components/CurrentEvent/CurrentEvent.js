import React from "react";
import Countdown from "react-countdown";
import PSTEvent from "./PSTEvent";
import MilliColle from "./MilliColle";
import Working from "./Working";
import "../Banners/banners.scss";


export default function CurrentEvent() {
  const PST = 'PST';
  const MILLICOLLE = 'MILLICOLLE';
  const MILLIONWORKING = 'MILLIONWORKING';

  const mode = MILLICOLLE;

  return (
    <div>      
      {/* <p>Current Event: Platinum Star Theater: </p> */}
      <p>Current Event: Millionlive Collection</p>
      {/* <p>Current Event: Platinum Star Tour: CHEER UP! HEARTS UP!</p> */}
      <p>Time Remaining: <Countdown date="2022-05-15T20:59:59.000+09:00" /></p>
      <div className="event-essentials">
        {/* <p>🔺Ranking SR: Anna</p>
        <p>🔸Point SR: Kana</p>
        <p>🔹Participating: Julia, Haruka</p> */}
        <p>🔸SR: Miki, Shiho</p>
        <p>🔹R: Kotoha</p>
      </div>
      <img className="banner" src="https://pbs.twimg.com/media/FRaxgmoVUAAu-Qt?format=png&name=900x900" alt="event" />

      {mode === PST && <PSTEvent />}
      {mode === MILLICOLLE && <MilliColle />}
      {mode === MILLIONWORKING && <Working />}
    </div>
  )
}