import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "LogOut" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
