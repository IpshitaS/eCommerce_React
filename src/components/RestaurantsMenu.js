import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { img_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import eg from "./eg";
const RestaurantsMenu = () => {
    const {resId} = useParams();
    const [isVisible , setIsVisible] = useState([]);
    const [visableSection , setVisableSection] = useState([]);
    const restaurant = useRestaurantMenu(resId);

    return !restaurant ? (
        <Shimmer />
    ) : (
        <div>
            <div className="flex p-3 mx-20 bg-green-200 justify-evenly">   
                <img 
                    className="h-48" 
                    src={img_CDN_URL + restaurant?.cards[0]?.card?.card?.info?.cloudinaryImageId} 
                />
                <div className="p-5 m-2 text-xl">
                    <h2 className="text-4xl font-bold underline">{restaurant?.cards[0]?.card?.card?.info?.name}</h2>
                    <h2>{restaurant?.cards[0]?.card?.card?.info?.areaName} , {restaurant?.cards[0]?.card?.card?.info?.city}</h2>
                    <span>⭐{restaurant?.cards[0]?.card?.card?.info?.avgRating}
                        <span className="text-xs">, {restaurant?.cards[0]?.card?.card?.info?.totalRatings/1000}k</span>
                    </span>
                    
                    <h2>{restaurant?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
                    <h2></h2>
                </div>
            </div>

            {/* Closers
            <div className="py-2 px-5 mx-5">               
            <h3>{restaurant?.cards[0]?.card?.card?.info?.costForTwo} for two</h3>
            </div> */}

            {/* Menu display */}
            <div className="p-10 m-10">
                {!restaurant ? (<Shimmer />) : (
                    <div>
                    {
                        restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.map((Cards, index) => (
                        <div key={index} className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800 mx-40"> 
                            {
                                !isVisible ?
                                <button 
                                    onClick={() => setIsVisible(true)}
                                    isVisible={visableSection == {index}}
                                    setIsVisable={() =>
                                    setVisableSection({index})}
                                    className="justify-between group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]">
                                    <span>{Cards?.card?.card?.title}</span>               
                                    <span className="text-right">^</span>
                                </button> :
                                <div>
                                    <button 
                                        onClick={() => setIsVisible(false)}
                                        className="justify-between group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]">
                                        <span>{Cards?.card?.card?.title}</span>               
                                        <span className="text-right rotate-[-180deg]">^</span>           
                                    </button>
                                    <p>{
                                        Cards?.card?.card?.itemCards?.map((itemCards) => (
                                            //display menu
                                        <div className="m-8 p-8 shadow-xl" key={itemCards?.card?.info.id}>
                                            <div className="justify-between flex">
                                                <div>
                                                    <h2 className="text-xl font-bold">{itemCards?.card?.info.name}</h2>
                                                    <h2 className="font-bold">Rs.{itemCards?.card?.info.price/100}</h2>
                                                    {/* <span className="flex">
                                                        <h2>⭐{itemCards?.card?.info?.ratings?.aggregatedRating?.rating}</h2>
                                                        <h2 className="text-xs">{itemCards?.card?.info?.ratings?.aggregatedRating?.ratingCount}</h2>
                                                    </span> */}
                                                    <h2>{itemCards?.card?.info.description}</h2> 
                                                </div>
                                                <img className="w-20" src={img_CDN_URL + itemCards?.card?.info.imageId} />
                                            </div>                                          
                                        </div>
                                        ))
                                    }</p>
                                </div>
                            }   
                        </div>
                        ))                        
                    }
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestaurantsMenu;