import React from "react";
import PSTEvent from "./PSTEvent";
import MilliColle from "./MilliColle";
import TalkParty from "./TalkParty";
import useVisualMode from "../../hooks/useVisualHook";
import "../Banners/banners.scss";


export default function CurrentEvent() {
  const PST = 'PST';
  const MILLICOLLE = 'MILLICOLLE';
  const TALKPARTY = 'TALKPARTY';

  const { mode } = useVisualMode(TALKPARTY);

  return (
    <div>
      {mode === PST && <PSTEvent />}
      {mode === MILLICOLLE && <MilliColle />}
      {mode === TALKPARTY && <TalkParty />}
    </div>
  )
}