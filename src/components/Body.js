import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { isUserOnline } = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const { setUserName, loginUser } = useContext(UserContext);

  return filteredRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search my-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              const text = e.target.value;
              setSearchText(text);
            }}
          />
          <button
            className="bg-green-100 px-4 py-2 m-4 rounded-lg"
            onClick={filterResOnSearch}
          >
            Search
          </button>
        </div>
        <div className="p-4 flex items-center ">
          <button
            className="bg-blue-600 px-4 py-2 rounded-lg"
            onClick={filterRes}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="p-4 flex items-center ">
          <label>UserName:</label>
          <input
            value={loginUser}
            className="border border-black p-2"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((res) => (
          <Link to={`/restaurant/${res.data.id}`} key={res.data.uuid}>
            {res.data.promoted ? (
              <RestaurantCardPromoted data={res} />
            ) : (
              <RestaurantCard data={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
