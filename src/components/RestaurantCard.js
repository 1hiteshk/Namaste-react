import { CDN_URL } from "../utils/constants";
const styleCard = {
    backgroundColor: "#f0f0f0",
  };

const RestaurantCard = (props) => {
    const { resData } = props;
  // destructuring and optional chaining
    const {cloudinaryImageId, name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          src={
            CDN_URL +
            resData.data.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo / 100} for two</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;