import React from "react";
import "./index.scss";
import { VscHome } from "react-icons/vsc";
import { AiOutlineCompass, AiFillLike } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { MdSubscriptions, MdVideoLibrary, MdHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
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
            <div className="icons">
              <VscHome size={25} />
            </div>
            <span>Principal</span>
          </li>
        </Link>

        <li>
          <div className="icons">
            <AiOutlineCompass size={25} />
          </div>
          <span>Explorar</span>
        </li>
        <li>
          <div className="icons">
            <MdSubscriptions size={25} />
          </div>
          <span>Subscriptions</span>
        </li>
        <hr />
        <li>
          <div className="icons">
            <MdVideoLibrary size={25} />
          </div>
          <span>Biblioteca</span>
        </li>
        <li>
          <div className="icons">
            <MdHistory size={25} />
          </div>
          <span>Historial</span>
        </li>
        <li>
          <div className="icons">
            <RiVideoLine size={25} />
          </div>
          <span>Tus videos</span>
        </li>
        <li>
          <div className="icons">
            <AiFillLike size={25} />
          </div>
          <span>Videos que me gustan</span>
        </li>
        <hr />
        <li>
          <div className="icons">
            <BsGear size={25} />
          </div>
          <span>Configuración</span>
        </li>
        <li>
          <div className="icons">
            <FiHelpCircle size={25} />
          </div>
          <span>Ayuda</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
