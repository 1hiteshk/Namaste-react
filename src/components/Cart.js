import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
import FoodItemCart from './FoodItemCart';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    // console.log(cartItems[0].card.info.defaultPrice / 100 , "2");
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const [price, setPrice] = useState(0);

    const total = () => {
        let prices = 0;
        cartItems.map((item,index) => {
            prices = (prices) + ( item.card.info.defaultPrice / 100 || item.card.info.price / 100 );
        })
        setPrice(prices);
    }

    useEffect( () => {
        total();
    }, [total])

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='font-bold text-2xl'>cart</h1>
      <div className='w-2/3 m-auto'>
        <button className='p-2 m-2 bg-red-600 text-white rounded'
          onClick={handleClearCart}
        >clearCart</button>
        {cartItems.length === 0 && <h1>Cart is empty Add items to the cart</h1>}
        {/* <ItemList items={cartItems} /> */}
        {cartItems.map( (item) => <FoodItemCart key={item.id} item={item} />)}
        <div className='m-4 p-4 font-bold text-2xl'>
            Total: &#8377; {price}
        </div>
        <span>
               
            </span>
      </div>
    </div>
  );
};

export default Cart;
