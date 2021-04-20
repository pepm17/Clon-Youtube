import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdApps, IoMdNotificationsOutline } from "react-icons/io";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <AiOutlineMenu className="menu" />
        <img
          className="logoImage"
          src="https://media.pasionmovil.com/2020/03/7b014b7e-youtube_logo.jpg"
          alt="logoImage"
        />
      </div>

      <div className="searchInput">
        <input placeholder="Search" />
        <button className="buttonSearch">
          <AiOutlineSearch className="imageSearch" />
        </button>
      </div>

      <div className="items">
        <ul className="list">
          <li>
            <RiVideoAddLine className="itemIcon" />
          </li>
          <li>
            <IoMdApps className="itemIcon" />
          </li>
          <li>
            <IoMdNotificationsOutline className="itemIcon" />
          </li>
        </ul>
        <img
          className="userImage"
          src="https://1.bp.blogspot.com/-ntFNcVx7EOE/XtlPif68ppI/AAAAAAABdF4/OMJyqZoYPqsFLLHw2_wKmzwBPb9PAQ2ZwCK4BGAsYHg/s850/avatar-fb.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
