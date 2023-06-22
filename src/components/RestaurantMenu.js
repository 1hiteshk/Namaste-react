import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  };

  //destructuring initially resInfo is null so cant use name or cuisines and no ternary operator, use if condition
  //   const { name, cuisines, costForTwoMessage } =
  //     resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

  if (resInfo == null) return <Shimmer />;

  return (
    <div className="menu">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")} -{" "}
        {resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul>
        {resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
          (item) => (
            <li key={item.card.info.id}> {item.card.info.name} - {" Rs."} {item.card.info.price /100 || item.card.info.defaultPrice /100}</li>
          )
        )}
        {/* <li>{resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0].card.info.name}</li>
        <li>{resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[1].card.info.name}</li>
        <li>{resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[2].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
