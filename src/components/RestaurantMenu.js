import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     MENU_API + resId
  //   );
  //   const json = await data.json();

  //   console.log(json);
  //   setResInfo(json.data);
  // };

  //destructuring initially resInfo is null so cant use name or cuisines and no ternary operator, use if condition
  //   const { name, cuisines, costForTwoMessage } =
  //     resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log( resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards, "me");

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  if (resInfo == null) return <Shimmer />;

  return (
    <div className="text-center ">
      <h1 className="font-bold my-6 text-2xl">
        {resInfo?.cards[0]?.card?.card?.info?.name}
      </h1>
      <p className="font-bold text-lg">
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}{" "}
      </p>
      {/* categories accordian */}
      {categories.map((category,index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={ () => {
            if(index === showIndex) setShowIndex(null);
            else
            setShowIndex(index)}
          }
        />
      ))}

      {/* <li>{resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info.name}</li>
        <li>{resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1].card.info.name}</li>
        <li>{resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2].card.info.name}</li> */}
    </div>
  );
};

export default RestaurantMenu;
