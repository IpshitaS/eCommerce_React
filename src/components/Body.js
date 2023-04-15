import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import {filterData} from "../utils/helper";
import { fetch_LIST_URL } from "../config";


const Body = () => {

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(fetch_LIST_URL);
    const json = await data.json();
    console.log(json);
    //optional channing "?"
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline){
    return <h1> 🔴Offline, please check your connection!!!</h1>
  }

  //not render component - Early return
  if(!allRestaurants) return null;

  //filter restaurant is empty
  if(filteredRestaurants?.length === 0 && allRestaurants?.length !== 0)
    return <h2 className="font-bold text-center text-xl p-10 m-10">No restaurant match your filter!!!</h2>

  return allRestaurants?.length === 0 ? (<Shimmer/>) : (
    <>
      <div className="px-5 py-1 bg-blue-500 mx-28 flex justify-evenly">
        <div>
        <input
          type="text"
          className="focus:bg-slate-300"
          placeholder="Search Restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="px-5 bg-gray-600 text-white rounded-xl hover:bg-gray-500"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        </div>

        <div>
        <input
          type="text"
          className="focus:bg-slate-300"
          placeholder="Location..."
        />
        <button 
          className="px-5 bg-gray-600 text-white rounded-xl hover:bg-gray-500">
          Location
        </button>
        </div>

      </div>
      <div className="flex flex-wrap p-2 m-2 mx-16 justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link 
              to={"/restraunt/" + restaurant.data.id}
              key ={restaurant.data.id}>
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
    
export default Body;