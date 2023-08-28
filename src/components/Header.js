import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { getCartItems } from "../utils/cartSlice";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  const { isUserOnline } = useOnlineStatus();

  const { loginUser } = useContext(UserContext);

  const cartItems = useSelector(getCartItems);

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

          <li className="px-4">
            <Link to="/cart">Cart {`${cartItems.length} items`}</Link>
          </li>

          <button
            className="login"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin ? "LogOut" : "Login"}
          </button>

          <li className="px-4 font-bold">{loginUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
