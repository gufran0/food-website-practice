import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div
              key={item.card.info.id}
              className="p-2 m2 border-gray-400 border-b-2 text-left justify-between"
            >
              <div className="py-2">
                <span>{item?.card?.info?.name}</span>
                <span>
                  {" "}
                  - ₹{" "}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}{" "}
                </span>
              </div>

              <p className="text-xs">{item?.card?.info?.description}</p>
              <div className="w-40 p-4">
                {" "}
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
              </div>
              <div className="p-2 bg-black text-white shadow-lg absolute mx-16  rounded-lg">
                Add +
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
