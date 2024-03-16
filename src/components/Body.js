import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { resObj } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import userContext from "../utils/UserContext";
const Body = () => {
  //local state variable -- super powerful variable

  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredListRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardDelivery = withPromotedLabel(RestaurantCard);

  console.log("listof", listOfRestaurants);

  const { loggedInUser, setUserInfo } = useContext(userContext);

  //whenever state variables update. react triggers a reconciliation cycle(re renders the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json", json);

    // Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  // reconcillation algprtithm which finds out the difference between virtual dom and the real don which updates the dom only when required

  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer></Shimmer>;
  // }
  // let listOfResturant = [
  //   {
  //     info: {
  //       id: "316775",
  //       name: "Baskin Robbins - Ice Cream Desserts",
  //       cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
  //       locality: "Nucleus Mall",
  //       areaName: "Lalpur",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Desserts", "Ice Cream"],
  //       avgRating: 4.3,
  //       veg: true,
  //       parentId: "5588",
  //       avgRatingString: "4.3",
  //       totalRatingsString: "500+",
  //       sla: {
  //         deliveryTime: 33,
  //         lastMileTravel: 2.7,
  //         serviceability: "SERVICEABLE",
  //         slaString: "33 mins",
  //         lastMileTravelString: "2.7 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "377800",
  //       name: "Pizza Hut",
  //       cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
  //       locality: "Old HB Road",
  //       areaName: "Kanka",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.1,
  //       parentId: "721",
  //       avgRatingString: "3.1",
  //       totalRatingsString: "1K+",
  //       sla: {
  //         deliveryTime: 32,
  //         lastMileTravel: 1.8,
  //         serviceability: "SERVICEABLE",
  //         slaString: "32 mins",
  //         lastMileTravelString: "1.8 km",
  //         iconType: "ICON_TYPE_EMPTY",
  //       },
  //     },
  //   },
  // ];

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search m-4 p-4">
        <input
          type="text"
          data-testid="searchInput"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          onClick={() => {
            // Filter the restraunt cards and update the UI
            // searchText
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );

            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search m-4 p-4 flex items-center">
        <label>User Name</label>
        <input
          value={loggedInUser}
          className="border border-black"
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap">
        {/* <RestaurantCard
            resName="Meghna Foods"
            cuisine="Biryani North Indian, Asian"
            stars="4.4"
            min="38 mins"
          ></RestaurantCard>
  
          <RestaurantCard
            resName="kfc"
            cuisine="Burger ,Fat Food"
            stars="4.5"
            min="36 mins"
          ></RestaurantCard>
          <RestaurantCard resName="burger king"></RestaurantCard> */}
        {filteredListRestaurant.map((restaurant, index) => {
          return (
            <Link to={"/restaurants/" + restaurant?.info?.id}>
              {restaurant?.info?.aggregatedDiscountInfoV3?.discountCalloutInfo
                ?.message === "Free delivery" ? (
                <RestaurantCardDelivery
                  resData={restaurant}
                ></RestaurantCardDelivery>
              ) : (
                <RestaurantCard
                  key={restaurant?.info?.id}
                  resData={restaurant}
                ></RestaurantCard>
              )}
            </Link>
          );
        })}
        {/* <RestaurantCard resData={resObj[0]}> </RestaurantCard>
          <RestaurantCard resData={resObj[1]}></RestaurantCard>
          <RestaurantCard resData={resObj[2]}></RestaurantCard>
          <RestaurantCard resData={resObj[3]}></RestaurantCard> */}
      </div>
    </div>
  );
};

export default Body;
