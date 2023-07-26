import RestaurantCard from "./RestaurantCard";
import { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import constants from "../utils/constants";
import { SWIGGY_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //reslist
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const { loggedInUser ,setUserName} = useContext(UserContext);
  
  const DATA_LINKS = constants();
  const FETCH_SWIGGY_API = DATA_LINKS.SWIGGY_API;
  // console.log(DATA_LINKS.SWIGGY_API, "data_link")

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, [FETCH_SWIGGY_API]);

  const fetchData = async () => {
    console.log(FETCH_SWIGGY_API, "2")
    const data = await fetch(
      FETCH_SWIGGY_API
    );
    const json = await data.json();
    console.log(json, "data aaya");
    // optional chaining
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants, "rest. aaye")
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(filteredRestaurant);
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return ( <h1> Looks like you are offline!! please check your internet connection.</h1>
    );

  // conditional rendering
  if (listOfRestaurants?.length === 0) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter flex m-4 p-4">
        <div className="">
          <input
            type="text"
            placeholder="Search for restaurants and foods"
            className="border border-solid border-black rounded-lg px-4 py-1 w-64"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setUserName(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // filter the restaurants card and update the ui
              // searchtext

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()) || res.info.cuisines.join(", ").toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <div className=" flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
              console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="bg-gray-100 ml-4 px-4 h-10 mt-4 py-2 rounded-md"><span>you searched : {loggedInUser}</span></div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {/* if the restaurant is promoted then add a promoted label to it */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
