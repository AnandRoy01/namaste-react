import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = data;
  return (
    <div className="m-4 p-4 w-[250px] shadow-sm rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(" ,")}</h4>
      <h4 className="py-4">{avgRating}</h4>
      <h4 className="font-bold">{deliveryTime} min</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
