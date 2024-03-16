import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();
  // console.log("hehe",useRestaurantMenu());

  // console.log(params, "params");

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json, "restaurantdata");
  //   setResInfo(json?.data);
  // };
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer></Shimmer>;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards[1]?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    "itemsss",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (e) =>
        e?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name} </h1>
      <p className="font-bold text-lg">
        {cuisines?.join(",")} - {costForTwoMessage}
      </p>

      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            showItems={index === showIndex ? true : false}
            data={category?.card?.card}
            setShowIndex={() => setShowIndex(index)}
          ></RestaurantCategory>
        );
      })}

      {/* <ul>
        {itemCards.map((item) => {
          return (
            <li>
              {item?.card?.info?.name} -{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })} */}

      {/* <li> {itemCards[0].card?.info?.name} </li> */}
      {/* <li>{itemCards[1].card?.info?.name} </li> */}
      {/* <li>{itemCards[2].card?.info?.name} </li> */}
      {/* </ul> */}
    </div>
  );
};

export default RestaurantMenu;
