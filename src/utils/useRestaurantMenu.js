import { useEffect, useState } from "react";
import { fetch_MENU_URL } from "../config";

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() =>{
        getRestrantsInfo();
    },[])

    async function getRestrantsInfo (){
        const data = await fetch(fetch_MENU_URL);
        const json = await data.json();
        console.log(json.data)
        setRestaurant(json.data);
    }
    return restaurant;
}

export default useRestaurantMenu;