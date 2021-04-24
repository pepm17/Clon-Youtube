import { VscHome } from "react-icons/vsc";
import { AiOutlineCompass, AiFillLike } from "react-icons/ai";
import { RiVideoLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { BsGear } from "react-icons/bs";
import { MdSubscriptions, MdVideoLibrary, MdHistory } from "react-icons/md";
import style from "./sidebar.module.scss";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <ul className={style.items}>
        <Link href={`/`}>
          <li>
            <div className={style.icons}>
              <VscHome size={25} />
            </div>
            <span>Principal</span>
          </li>
        </Link>

        <li>
          <div className={style.icons}>
            <AiOutlineCompass size={25} />
          </div>
          <span>Explorar</span>
        </li>
        <li>
          <div className={style.icons}>
            <MdSubscriptions size={25} />
          </div>
          <span>Subscriptions</span>
        </li>
        <hr />
        <li>
          <div className={style.icons}>
            <MdVideoLibrary size={25} />
          </div>
          <span>Biblioteca</span>
        </li>
        <li>
          <div className={style.icons}>
            <MdHistory size={25} />
          </div>
          <span>Historial</span>
        </li>
        <li>
          <div className={style.icons}>
            <RiVideoLine size={25} />
          </div>
          <span>Tus videos</span>
        </li>
        <li>
          <div className={style.icons}>
            <AiFillLike size={25} />
          </div>
          <span>Videos que me gustan</span>
        </li>
        <hr />
        <li>
          <div className={style.icons}>
            <BsGear size={25} />
          </div>
          <span>Configuración</span>
        </li>
        <li>
          <div className={style.icons}>
            <FiHelpCircle size={25} />
          </div>
          <span>Ayuda</span>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
