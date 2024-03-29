import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdApps, IoMdNotificationsOutline } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import "./header.scss";
import { User } from "../../user";
import ItemAuth from "./itemAuth";
import ItemCreateVideo from "./itemCreateVideo";

interface AnimationSideBar {
  show: () => void;
}

const Header = ({ show }: AnimationSideBar) => {
  const userStorage = localStorage.getItem("user");
  const user = userStorage ? (JSON.parse(userStorage) as User) : undefined;
  const history = useHistory();

  const onSumitLogOut = () => {
    localStorage.clear();
    history.go(0);
    history.push("/");
  };

  return (
    <div className="header">
      <div className="logo">
        <AiOutlineMenu className="menu" onClick={show} data-testid="menu" />
        <Link
          to={`/`}
          style={{ color: "white", textDecoration: "none", display: "flex" }}
        >
          <img
            className="logoImage"
            src="https://media.pasionmovil.com/2020/03/7b014b7e-youtube_logo.jpg"
            alt="logoImage"
          />
        </Link>
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
            <RiVideoAddLine className="itemIcon create_video" />
            <ItemCreateVideo />
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
          src={
            user?.photo
              ? "http://localhost:4000/" + user.photo
              : "https://1.bp.blogspot.com/-ntFNcVx7EOE/XtlPif68ppI/AAAAAAABdF4/OMJyqZoYPqsFLLHw2_wKmzwBPb9PAQ2ZwCK4BGAsYHg/s850/avatar-fb.png"
          }
          alt=""
        />
        {user ? (
          <ul className="user_button">
            <li onClick={onSumitLogOut}>Log Out</li>
          </ul>
        ) : (
          <ItemAuth />
        )}
      </div>
    </div>
  );
};

export default Header;
