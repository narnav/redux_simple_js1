import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { checkout } from './cartAPI';

const initialState = {
  myCart:[{id:1,prodName:'test',price:0}],
  status:""
};

export const checkoutAsync = createAsyncThunk(
    'cart/checkout',
    async (myCart) => {
        console.log(myCart);
        // console.log(state.cart.myCart);
      const response = await checkout(myCart);
      return response.data;
    }
  );

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    buy: (state,action) => {
        console.log(action.payload);
        state.myCart.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status ='Done'
      })
      .addCase(checkoutAsync.rejected, (state, action) => {
        state.status ='Rejected'
      })
  },
});

export const { buy } = cartSlice.actions;
export const selectmyCart = (state) => state.cart.myCart;
export const selectStatus = (state) => state.cart.status;
export default cartSlice.reducer;