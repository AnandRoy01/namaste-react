import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const { isUserOnline } = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg px-8 bg-pink-100 items-center">
      <div className="logo-container">
        <img className="w-48" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {isUserOnline ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
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
