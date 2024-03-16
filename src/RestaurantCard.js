import { CDN_URL } from "./utils/constants";
// import {useform} from "react-hook-form"
import { useParams } from "react-router-dom";

const RestaurantCard = ({ resData }) => {
  // const form = useform();
  // const { register } = form;
  // console.log("resData", resData);

  const { cloudinaryImageId, name, cuisines, avgRating, slaString } =
    resData.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100">
      {/* style={styleCard} */}
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

// higher order component
// input - restaurantCard => restaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
