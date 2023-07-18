import React from "react";
import ItemList from "./ItemList";

const RestaurantsCategory = ({ data, showItem, setActiveItem, id }) => {
  const handleClick = () => {
    if (showItem) {
      setActiveItem(null);
    } else {
      setActiveItem(id);
    }
  };

  return (
    <div>
      <div className="bg-gray-50 shadow-lg p-4 w-6/12 m-auto my-2  ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItem ? <ItemList itemCards={data?.itemCards} /> : null}
      </div>
    </div>
  );
};

export default RestaurantsCategory;
