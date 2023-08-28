import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ itemCards }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {itemCards.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="m-2 p-2 border-b-4 text-left flex items-center"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold"> {item?.card?.info?.name}</span>
              <span>
                - &#8377;
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 p-4">
            <div className="absolut">
              <button
                className="p-2 bg-white shadow-lg m-auto  rounded-lg text-xs"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
