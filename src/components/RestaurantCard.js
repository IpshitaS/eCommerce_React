import { img_CDN_URL } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString, }) => {
  return (
    //square bracket notation- dynamic classes
    //use tailwind native classes- good
    <div className="w-56 h-80 m-3 p-2 shadow-xl">
      <img src={img_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-lg">{name}</h2>
      <h4>{cuisines.slice(0,6).join(", ")}</h4><br/>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;