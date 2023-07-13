import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } =
    data?.data;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} min</h4>
    </div>
  );
};

export default RestaurantCard;
