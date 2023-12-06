import {  createAsyncThunk,createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './superAPI';

const initialState = {
    products:[]
};
export const getDataAsync = createAsyncThunk(
    'super/fetchProducts',
    async () => {
      const response = await fetchProducts();
      return response.data;
    }
  );

export const superSlice = createSlice({
  name: 'super',
  initialState,
  reducers: {

    buy: (state,action) => {
        state.mysuper.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.products =action.payload
      })
  },
});

export const { buy } = superSlice.actions;
export const selectProducts = (state) => state.super.products;
export default superSlice.reducer;
