import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
  };

  const filterRes = () => {
    setFilteredRes(listOfRestaurants.filter((res) => +res.data.avgRating > 4));
  };

  const filterResOnSearch = () => {
    setFilteredRes(
      listOfRestaurants.filter((res) =>
        res.data.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  console.log("listOfRestaurants", listOfRestaurants);
  return filteredRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
            }}
          />
          <button onClick={filterResOnSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterRes}>
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((res) => (
          <RestaurantCard data={res} key={res.data.uuid} />
        ))}
      </div>
    </div>
  );
};

export default Body;
