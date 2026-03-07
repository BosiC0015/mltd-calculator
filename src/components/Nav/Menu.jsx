import React, { useState } from "react";
import MenuItem from "./MenuItem";
import './Menu.scss';

export default function Menu(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuClass = () => {
    if (isOpen) {
      return "show";
    } else {
      return;
    };
  };

  const toggleList = () => {
    if (isOpen) {
      return "is-active"
    } else {
      return ""
    }
  }

  const handleItemClick = (mode) => {
    props.select(mode);
    setIsOpen(false);
  };

  return (
    <aside>
      <div className="navBtn" onClick={toggleMenu}>
        <div className={`expand ${toggleList()}`}>
          <span></span><span></span>
        </div>
      </div>
      <div id="headerNav" className={menuClass()}>
        <ul>
          <MenuItem label="HOME" onClick={() => handleItemClick('WELCOME')}>HOME</MenuItem>
          <MenuItem label="PSTheater" onClick={() => handleItemClick('THEATER')}>PSTheater</MenuItem>
          <MenuItem label="PSTour" onClick={() => handleItemClick('TOUR')}>PSTour</MenuItem>
          <MenuItem label="PSTwinStage" onClick={() => handleItemClick('TWINSTAGE')}>PSTwinStage</MenuItem>
          <MenuItem label="PSTune" onClick={() => handleItemClick('TUNE')}>PSTune</MenuItem>
          <MenuItem label="PSTale / PSTeam" onClick={() => handleItemClick('TALE')}>PSTale / PSTeam</MenuItem>
          <MenuItem label="PSTreaure" onClick={() => handleItemClick('TREASURE')}>PSTreaure</MenuItem>
          <MenuItem label="PSTrust" onClick={() => handleItemClick('TRUST')}>PSTrust</MenuItem>
        </ul>
      </div>
    </aside>
  );
};