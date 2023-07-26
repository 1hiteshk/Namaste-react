import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { decrQuantity, incrQuantity, removeItem } from "../utils/cartSlice";

const FoodItemCart = ({item}) => {
    console.log(item)
    const { name,description,category,imageId,price,defaultPrice} =  item ;
    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
        dispatch(removeItem(item))
      
    }
  return (
    <div className="">
      <div className="p-2 m-2 border-b-2 text-left flex justify-between" key={item.id}>
                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-semibold">{name}</span>
                        <span className="font-semibold">  ₹ {price / 100 || defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{description}</p>
                    </div>

                    <div className="w-36 h-28 ">
                      <div className="absolute">
                        <button className="bg-white rounded w-28 h-8 mx-2 my-20 border font-semibold text-green-500"
                          onClick={ () => handleRemoveItem(item)}
                        >
                          Remove
                        </button>
                      </div>
                    <img className="w-32 h-24 rounded" src={IMG_CDN_URL + imageId} />
                    </div>
                    <div className="border flex flex-col justify-between">
                      <button className="bg-gray-400" onClick={() => item?.quantity >= 2 ? dispatch(decrQuantity(item)) :  handleRemoveItem(item)}>-</button>
                      <button onClick={console.log(item, "foodq")} >{item.quantity}.......</button>
                      <button className="bg-gray-400" onClick={() => dispatch(incrQuantity(item))}>+</button>
                    </div>
                </div>
     
    </div>
  );
};

export default FoodItemCart;
