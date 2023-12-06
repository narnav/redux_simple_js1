import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
    products:[{ "id": 1, "prodName": "milk", "price": 20, "pro_img": "" },
    { "id": 2, "prodName": "butter", "price": 10, "pro_img": "buttermilk.jpg" },
    { "id": 3, "prodName": "cheese", "price": 30, "pro_img": "cheese.jpg" },
    { "id": 4, "prodName": "curd", "price": 40, "pro_img": "curd.jpg" },
    { "id": 5, "prodName": "ghee", "price": 50, "pro_img": "ghee.jpg" },
    { "id": 6, "prodName": "milkshake", "price": 60, "pro_img": "milkshake.jpg" },
    { "id": 7, "prodName": "paneer", "price": 70, "pro_img": "paneer.jpg" },
    ]
};


export const superSlice = createSlice({
  name: 'super',
  initialState,
  reducers: {
    buy: (state,action) => {
        state.mysuper.push(action.payload)
    },
  },
});

export const { buy } = superSlice.actions;
export const selectProducts = (state) => state.super.products;
export default superSlice.reducer;

// products =
        // [{ "id": 1, "prodName": "milk", "price": 20, "pro_img": "" },
        // { "id": 2, "prodName": "butter", "price": 10, "pro_img": "buttermilk.jpg" },
        // { "id": 3, "prodName": "cheese", "price": 30, "pro_img": "cheese.jpg" },
        // { "id": 4, "prodName": "curd", "price": 40, "pro_img": "curd.jpg" },
        // { "id": 5, "prodName": "ghee", "price": 50, "pro_img": "ghee.jpg" },
        // { "id": 6, "prodName": "milkshake", "price": 60, "pro_img": "milkshake.jpg" },
        // { "id": 7, "prodName": "paneer", "price": 70, "pro_img": "paneer.jpg" },
        // ]