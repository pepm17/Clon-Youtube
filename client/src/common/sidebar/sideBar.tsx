import React from "react";
import "./sidebar.scss";
import { VscHome } from "react-icons/vsc";
import { AiOutlineCompass, AiFillLike } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { MdSubscriptions, MdVideoLibrary, MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";

interface AnimationSideBar {
  sideBarShow: boolean;
}

const SideBar = ({ sideBarShow }: AnimationSideBar) => {
  const styleIcons = sideBarShow ? "icons" : "icons_hidden";

  return (
    <div className="sidebar">
      <ul className="items">
        <Link
          to={`/`}
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          <li>
            <div className={styleIcons}>
              <VscHome size={25} />
            </div>
            <span>Principal</span>
          </li>
        </Link>

        <li>
          <div className={styleIcons}>
            <AiOutlineCompass size={25} />
          </div>
          <span>Explorar</span>
        </li>
        <li>
          <div className={styleIcons}>
            <MdSubscriptions size={25} />
          </div>
          <span>Subscriptions</span>
        </li>
        <hr />
        <li>
          <div className={styleIcons}>
            <MdVideoLibrary size={25} />
          </div>
          <span>Biblioteca</span>
        </li>
        <li>
          <div className={styleIcons}>
            <MdHistory size={25} />
          </div>
          <span>Historial</span>
        </li>
        <li>
          <div className={styleIcons}>
            <RiVideoLine size={25} />
          </div>
          <span>Tus videos</span>
        </li>
        <li>
          <div className={styleIcons}>
            <AiFillLike size={25} />
          </div>
          <span>Videos que me gustan</span>
        </li>
        <hr />
        <li>
          <div className={styleIcons}>
            <BsGear size={25} />
          </div>
          <span>Configuración</span>
        </li>
        <li>
          <div className={styleIcons}>
            <FiHelpCircle size={25} />
          </div>
          <span>Ayuda</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
