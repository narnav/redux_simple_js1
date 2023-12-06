import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy, selectmyCart } from './cartSlice';


export function Cart() {
    const myCart = useSelector(selectmyCart);
    const dispatch = useDispatch();
    

    return (
        <div>
            <button onClick={() => dispatch(buy({ id: 2, prodName: 'also_test', price: 1 }))}>Buy</button>
            
            {myCart.map((item, ind) => <div key={ind}>
                prodName : {item.prodName},
                price : {item.price}
            </div>)}
        </div>
    );
}
