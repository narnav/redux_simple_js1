import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy, selectmyCart } from './cartSlice';
import { selectProducts } from './superSlice';


export function Super() {
    const superProducts = useSelector(selectProducts);
    const dispatch = useDispatch();

    return (
        <div>
            {superProducts.map((item, ind) => <div key={ind}>
                prodName : {item.prodName},
                price : {item.price}
                <button onClick={() => dispatch(buy({ id: item.id, prodName: 'also_test', price: 1 }))}>Buy</button>
            </div>)}
        </div>
    );
}
