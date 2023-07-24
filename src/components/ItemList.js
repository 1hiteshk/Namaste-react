import { IMG_CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    // console.log(items);
    return(
        <div>
                {items.map(item => (
                <div className="p-2 m-2 border-b-2 text-left flex justify-between" key={item.card.info.id}>
                    <div className="w-9/12">
                    <div className="py-2">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <span className="font-semibold">  ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className="w-36 h-28 ">
                      <div className="absolute">
                        <button className="bg-white rounded w-28 h-8 mx-2 my-20 border font-semibold text-green-500">ADD +</button>
                      </div>
                    <img className="w-32 h-24 rounded" src={IMG_CDN_URL + item.card.info.imageId} />
                    </div>
                </div>
                ))}
        </div>
    )
};

export default ItemList;