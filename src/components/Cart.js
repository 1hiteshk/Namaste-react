import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ItemList from './ItemList';
import { clearCart } from '../utils/cartSlice';
import FoodItemCart from './FoodItemCart';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    let totalAmount =  useRef(0);
    console.log(cartItems,"cartitems");
    // console.log(cartItems[0].card.info.defaultPrice / 100 , "2");
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };

    totalAmount.current=0;
    const totalHandler = (price,quantity) => {
      totalAmount.current = Number(totalAmount.current) + (price * quantity);
    }
    

  return (
    <div className='text-center m-4 p-4'>
      <h1 className='font-bold text-2xl'>cart</h1>
      <div className='w-2/3 m-auto'>
        <button className='p-2 m-2 bg-red-600 text-white rounded'
          onClick={handleClearCart}
        >clearCart</button>
        {cartItems.length === 0 && <h1>Cart is empty Add items to the cart</h1>}
        {/* <ItemList items={cartItems} /> */}
        {cartItems.map( (item) => {
          totalHandler(item?.price, item?.quantity)
          
          return (<FoodItemCart key={item.id} item={item} />)
        } 
          )}
        <div className='m-4 p-4 font-bold text-2xl'>
            Total: &#8377; {(totalAmount.current / 100).toFixed(2)}
        </div>
        <span>
               
            </span>
      </div>
    </div>
  );
};

export default Cart;
