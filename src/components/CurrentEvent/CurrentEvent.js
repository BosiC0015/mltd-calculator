import React from "react";
import PSTEvent from "./PSTEvent";
import MilliColle from "./MilliColle";
import TalkParty from "./TalkParty";
import useVisualMode from "../../hooks/useVisualHook";
import "../Banners/banners.scss";
import AnnivEvent from "./AnniversaryEvent";


export default function CurrentEvent() {
  const PST = 'PST';
  const MILLICOLLE = 'MILLICOLLE';
  const TALKPARTY = 'TALKPARTY';
  const ANNIV = 'ANNIV';

  const { mode } = useVisualMode(TALKPARTY);

  return (
    <div>
      {mode === PST && <PSTEvent />}
      {mode === MILLICOLLE && <MilliColle />}
      {mode === TALKPARTY && <TalkParty />}
      {mode === ANNIV && <AnnivEvent />}
    </div>
  )
}