import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdApps, IoMdNotificationsOutline } from "react-icons/io";
import style from "./header.module.scss";
import ItemAuth from "./itemAuth";

import Link from "next/link";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <AiOutlineMenu className={style.menu} />
        <Link href={`/`}>
          <img
            className={style.logoImage}
            src="https://media.pasionmovil.com/2020/03/7b014b7e-youtube_logo.jpg"
            alt="logoImage"
          />
        </Link>
      </div>

      <div className={style.searchInput}>
        <input placeholder="Search" />
        <button className={style.buttonSearch}>
          <AiOutlineSearch className={style.imageSearch} />
        </button>
      </div>

      <div className={style.items}>
        <ul className={style.list}>
          <li>
            <RiVideoAddLine
              className={`${style.itemIcon} ${style.create_video}`}
            />
            {/*<ItemCreateVideo />*/}
          </li>
          <li>
            <IoMdApps className={style.itemIcon} />
          </li>
          <li>
            <IoMdNotificationsOutline className={style.itemIcon} />
          </li>
        </ul>

        <img
          className={style.userImage}
          src="https://1.bp.blogspot.com/-ntFNcVx7EOE/XtlPif68ppI/AAAAAAABdF4/OMJyqZoYPqsFLLHw2_wKmzwBPb9PAQ2ZwCK4BGAsYHg/s850/avatar-fb.png"
          alt=""
        />
        <ul className={style.user_button}>
          <ItemAuth />
        </ul>

        {/*
            user?.photo
              ? "http://localhost:4000/" + user.photo
              : "https://1.bp.blogspot.com/-ntFNcVx7EOE/XtlPif68ppI/AAAAAAABdF4/OMJyqZoYPqsFLLHw2_wKmzwBPb9PAQ2ZwCK4BGAsYHg/s850/avatar-fb.png"
          */}
        {/*user ? (
          <ul className="user_button">
            <li onClick={onSumitLogOut}>Log Out</li>
          </ul>
        ) :*/}
      </div>
    </div>
  );
};

export default Header;
