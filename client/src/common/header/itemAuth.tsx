import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./itemAuth.scss";

const ItemAuth = () => {
  return (
    <ul className="user_button">
      <Link
        style={{ color: "white", textDecoration: "none" }}
        to="/user/register"
      >
        <li>
          <div className="icon_auth">
            <FaSignInAlt />
            <span>Register</span>
          </div>
        </li>
      </Link>

      <Link style={{ color: "white", textDecoration: "none" }} to="/user/login">
        <li>
          <div className="icon_auth">
            <FaSignInAlt />
            <span>Login</span>
          </div>
        </li>
      </Link>
    </ul>
  );
};

export default ItemAuth;
