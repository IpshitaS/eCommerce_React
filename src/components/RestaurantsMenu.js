import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantsMenu = () => {
    // read dynamic URL
    const {resId} = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() =>{
        getRestrantsInfo();
    },[])

    async function getRestrantsInfo (){
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9621948&lng=77.7115841&restaurantId=8530&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json.data)
        setRestaurant(json.data);
    }

    return (
        <div className="menu">
            <div>
                <h1>Restraunt id: {resId}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={img_CDN_URL + restaurant?.cloudinaryImageId} />
                <h3>{restaurant?.area}</h3>
                <h3>{restaurant?.city}</h3>
                <h3>{restaurant?.avgRating} stars</h3>
                <h3>{restaurant?.costForTwoMsg}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                <ul>
                {/*
                Object.values(restaurant?.menu?.items).map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))
                */}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantsMenu;