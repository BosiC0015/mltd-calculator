import React from "react";
import PSTEvent from "./PSTEvent";
import MilliColle from "./MilliColle";
import Working from "./Working";
import useVisualMode from "../../hooks/useVisualHook";
import "../Banners/banners.scss";


export default function CurrentEvent() {
  const PST = 'PST';
  const MILLICOLLE = 'MILLICOLLE';
  const MILLIONWORKING = 'MILLIONWORKING';

  const { mode } = useVisualMode(PST);

  return (
    <div>
      {mode === PST && <PSTEvent />}
      {mode === MILLICOLLE && <MilliColle />}
      {mode === MILLIONWORKING && <Working />}
    </div>
  )
}