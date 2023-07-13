import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  const filterRes = () => {
    setListOfRestaurants(
      listOfRestaurants.filter((res) => +res.data.avgRating > 4)
    );
  };

  const resetFilter = () => {
    setListOfRestaurants(resData);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterRes}>
          Top rated restaurant
        </button>
        <button className="filter-btn" onClick={resetFilter}>
          Reset Filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard data={res} key={res.data.uuid} />
        ))}
      </div>
    </div>
  );
};

export default Body;
