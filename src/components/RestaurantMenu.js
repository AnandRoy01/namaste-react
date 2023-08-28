import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

import useRestaurantMenu from "./useRestaurantMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const { resId } = useParams();

  const [activeItem, setActiveItem] = useState(null);

  const { resInfo } = useRestaurantMenu();
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item?.card?.card?.["@type"].includes(
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(", ")}</p>

      {categories.map((category, index) => (
        <RestaurantsCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={index === activeItem}
          setActiveItem={setActiveItem}
          id={index}
        />
      ))}
      {/* <h4>{costForTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - &#8377;{" "}
            {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
