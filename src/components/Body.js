import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { isUserOnline } = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (listOfRestaurants.length === 0) {
      const data = await fetch(API_URL);
      const json = await data.json();
      setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
    }
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

  if (isUserOnline === false)
    return <h1>Looks like you are offline, Please check your internet!!</h1>;

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
          <Link to={`/restaurant/${res.data.id}`} key={res.data.uuid}>
            <RestaurantCard data={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
