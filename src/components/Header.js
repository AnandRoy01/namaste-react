import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>cart</li>
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
