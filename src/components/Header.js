import React from "react";
import "./Header.scss";


export default function Header(props) {
  return (
    <a href='#click' className='menu'>  
      <span className='menu-title'>Choose Event Type</span>
      <ul className='menu-dropdown'>
        <li onClick={() => props.select('THEATER')}>PSTheater</li>
        <li onClick={() => props.select('TOUR')}>PSTour</li>
        <li onClick={() => props.select('TWINSTAGE')}>PSTwinStage</li>
        <li onClick={() => props.select('TUNE')}>PSTune</li>
        <li onClick={() => props.select('TALE')}>PSTale</li>
        <li onClick={() => props.select('TREASURE')}>PSTreaure</li>
        <li onClick={() => props.select('TRUST')}>PSTrust</li>
      </ul>
    </a>
  );
};