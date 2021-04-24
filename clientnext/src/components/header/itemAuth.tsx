import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";
import style from "./itemAuth.module.scss";

const ItemAuth = () => {
  return (
    <>
      <Link href="/user/register">
        <li className={style.li_auth}>
          <div className={style.icon_auth}>
            <FaSignInAlt />
            <span>Register</span>
          </div>
        </li>
      </Link>

      <Link href="/user/login">
        <li className={style.li_auth}>
          <div className={style.icon_auth}>
            <FaSignInAlt />
            <span>Login</span>
          </div>
        </li>
      </Link>
    </>
  );
};

export default ItemAuth;
