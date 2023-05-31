import React from "react";
import { miniCharas } from "../../helpers/miniCharas";
import getRandom from "../../helpers/getRandom";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import ReactTooltip from "react-tooltip";
import { BsBookmarkStarFill } from "react-icons/bs";
import "./Sidebar.scss";


export default function Sidebar(props) {
  const miniCharaImgs = Object.values(miniCharas);

  return (
    <ProSidebar image={miniCharaImgs[getRandom(52)]}>
      <Menu iconShape="square">
        <MenuItem id="sidebar-header" icon={<BsBookmarkStarFill />} data-tip="Choose Event Type" onClick={() => props.select('WELCOME')}>CHOOSE EVENT TYPE</MenuItem>
        <ReactTooltip place="bottom" type="dark" effect="solid"/>
        <MenuItem onClick={() => props.select('THEATER')}>PSTheater</MenuItem>
        <MenuItem onClick={() => props.select('TOUR')}>PSTour</MenuItem>
        <MenuItem onClick={() => props.select('TWINSTAGE')}>PSTwinStage</MenuItem>
        <MenuItem onClick={() => props.select('TUNE')}>PSTune</MenuItem>
        <MenuItem onClick={() => props.select('TALE')}>PSTale</MenuItem>
        <MenuItem onClick={() => props.select('TREASURE')}>PSTreaure</MenuItem>
        <MenuItem onClick={() => props.select('TRUST')}>PSTrust</MenuItem>
        <MenuItem></MenuItem>
        <MenuItem onClick={() => props.select('WELCOME')}>BACK TO HOME</MenuItem>
      </Menu>
    </ProSidebar>
  )
}