import React from "react";
import { miniCharas } from "../../helpers/miniCharas";
import getRandom from "../../helpers/getRandom";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Tooltip } from "react-tooltip";
import { BsBookmarkStarFill } from "react-icons/bs";
import "./navbar.scss";


export default function NavBar(props) {
  const miniCharaImgs = Object.values(miniCharas);

  return (
    <Sidebar image={miniCharaImgs[getRandom(54)]}>
      <Menu iconShape="square">
        <MenuItem id="navbar-header" icon={<BsBookmarkStarFill />} data-tip="Choose Event Type" onClick={() => props.select('WELCOME')}>CHOOSE EVENT TYPE</MenuItem>
        <Tooltip place="bottom" type="dark" effect="solid"/>
        <MenuItem onClick={() => props.select('THEATER')}>PSTheater</MenuItem>
        <MenuItem onClick={() => props.select('TOUR')}>PSTour</MenuItem>
        <MenuItem onClick={() => props.select('TWINSTAGE')}>PSTwinStage</MenuItem>
        <MenuItem onClick={() => props.select('TUNE')}>PSTune</MenuItem>
        <MenuItem onClick={() => props.select('TALE')}>PSTale / PSTeam</MenuItem>
        <MenuItem onClick={() => props.select('TREASURE')}>PSTreaure</MenuItem>
        <MenuItem onClick={() => props.select('TRUST')}>PSTrust</MenuItem>
        <MenuItem></MenuItem>
        <MenuItem onClick={() => props.select('WELCOME')}>BACK TO HOME</MenuItem>
      </Menu>
    </Sidebar>
  )
}