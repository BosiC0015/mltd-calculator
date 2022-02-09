import React from "react";


const imgs = [
  'https://imas.gamedbs.jp/mlth/image/chara/loading/1626621122045_5stwjvyf.png',
  'https://imas.gamedbs.jp/mlth/image/chara/loading/1626621120029_s0peziy7.png',
  'https://imas.gamedbs.jp/mlth/image/chara/loading/1626621122044_9lbu2dca.png'
];

const getRandom = (num) => {
  return Math.floor(Math.random() * num);
};

export default function Welcome(props) {
  return (
    <div className="main-container">
      <p className="title">Welcome to MLTD Calculator</p>
      <img alt="random minis" src={imgs[getRandom(3)]} />
    </div>
  );
};