import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  myCart:[{id:1,prodName:'test',price:0}]
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    buy: (state,action) => {
        console.log(action.payload);
        state.myCart.push(action.payload)
    },
  },
});

export const { buy } = cartSlice.actions;
export const selectmyCart = (state) => state.cart.myCart;
export default cartSlice.reducer;