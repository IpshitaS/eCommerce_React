import { img_CDN_URL } from "../config";

const CartFood = ({ imageId
    , name, price}) => {
  return (
    <div className="p-2 m-5 justify-between flex shadow-xl">
      <div>
        <h2 className="font-bold text-lg">{name}</h2>
        <h4 className="font-bold">Rs.{price/100}</h4>
      </div>
      <div className="flex">
        <button>+ </button>
        <img className="w-20" src={img_CDN_URL + imageId} />
        <button> -</button>
      </div>
      
    </div>
  );
};

export default CartFood;