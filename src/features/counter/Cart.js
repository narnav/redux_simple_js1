import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy, checkoutAsync, selectStatus, selectmyCart } from './cartSlice';


export function Cart() {
    const myCart = useSelector(selectmyCart);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();

    return (
        <div>
            {myCart.map((item, ind) => <div key={ind}>
                prodName : {item.prodName},
                price : {item.price}
            </div>)}
            <button onClick={() => dispatch(checkoutAsync(myCart))}>Checkout</button>
            {status}
        </div>
    );
}
