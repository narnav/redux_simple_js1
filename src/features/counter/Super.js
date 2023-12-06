import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buy, selectmyCart } from './cartSlice';
import { getDataAsync, selectProducts } from './superSlice';


export function Super() {
    const superProducts = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataAsync())
    }, [])

    return (
        <div style={{backgroundColor:"gray"}}>
            {superProducts.map((item, ind) => <div key={ind}>
                prodName : {item.prodName},
                price : {item.price}
                <button onClick={() => dispatch(buy({ id: item.id, prodName: 'also_test', price: 1 }))}>Buy</button>
            </div>)}
        </div>
    );
}
