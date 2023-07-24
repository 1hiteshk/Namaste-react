import { useEffect, useState } from "react";
import constants from "./constants";

const useRestaurantMenu = (resId) => {

  const DATA_LINKS = constants();
  const FETCH_SWIGGY_MENU_API = DATA_LINKS.SWIGGY_MENU_API

  const [resInfo, setResInfo] = useState(null);
  // fetchdata
  useEffect(() =>{
    fetchData();
  },[])

  const fetchData = async() => {
      const data = await fetch(FETCH_SWIGGY_MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data); 
  }
  return resInfo;
}

export default useRestaurantMenu;