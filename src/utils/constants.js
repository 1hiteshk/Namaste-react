import useLocation from "./useLocation";
import { useEffect, useState } from "react";

const constants = () => {
    
const [geolocation, setGeolocation] = useState({
    lat: 12.971599, 
    lng: 77.594566,
  })

  useEffect(() => {
    getGeoLocationData();
  }, []);

  const getGeoLocationData = async () => {
    console.log("heybro")
    const END_POINT = `https://ipapi.co/json/`;
    const locationData = await fetch(END_POINT);
    const finalData = await locationData.json()
    // setLocation(finalData);
    console.log(finalData, "he")
    setGeolocation({
      lat: finalData.latitude,
      lng: finalData.longitude,
    })
}

const SWIGGY_MENU_API = `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${geolocation.lat}&lng=${geolocation.lng}&restaurantId=`;
const SWIGGY_API = `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${geolocation.lat}&lng=${geolocation.lng}&page_type=DESKTOP_WEB_LISTING`
console.log(SWIGGY_API, "in constants")


return  { SWIGGY_API , SWIGGY_MENU_API } ;

}


export default constants;

export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const LOGO_URL = "https://img.freepik.com/premium-vector/restaurant-logo-design-concept-vector-food-logo-design-concept_9850-2840.jpg?w=2000";

export const MENU_API = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.971599&lng=77.594566&restaurantId=";

export const jpr = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&page_type=DESKTOP_WEB_LISTING";
export const hsr = "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.1491875&lng=75.7216527&page_type=DESKTOP_WEB_LISTING"

