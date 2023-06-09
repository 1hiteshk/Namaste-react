import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const RestaurantCard = (props) => {
    const { resData } = props;
  // destructuring and optional chaining
    const {cloudinaryImageId, name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;

    return (
      <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-400 bg-gray-50 hover:rounded-none hover:duration-500" >
        <img
          className="rounded-lg hover:rounded-none hover:ease-in-out hover:duration-500"
          src={
            CDN_URL +
            resData.data.cloudinaryImageId
          }
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4 className="pb-1">{cuisines.join(", ")}</h4>
        <h4 className="bg-[#48c479] text-white px-2 w-24 py-0">{avgRating} ⭐stars</h4>
        <div className="flex">
        <p className="text-md text-gray-700">•  {deliveryTime} minutes</p>
        <p className="text-md text-gray-700 pl-4">•  ₹{costForTwo / 100} for two</p>
        </div>
        
      </div>
    );
  };

  export default RestaurantCard;