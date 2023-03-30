import { img_CDN_URL } from "../config";
// import { restaurantlist } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, lastMileTravelString, }) => {
  return (
    <div className="card">
      {/*<img src={`${img_CDN_URL}${cloudinaryImageId}`} />*/}
      <img src={img_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>
      {cuisines.join(", ")}
      </h4>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

export default RestaurantCard;