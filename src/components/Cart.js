import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCartItems } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center p-10 m-10 font-bold">
      <h1 className="text-2xl">Cart</h1>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="w-6/12 m-auto ">
        {cartItems.length === 0 ? (
          <h1> Add items to Cart !!</h1>
        ) : (
          <ItemList itemCards={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
