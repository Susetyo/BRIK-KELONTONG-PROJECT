/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type ItemState = {
  data: any;
  isLoading: boolean;
}

const initialState: ItemState = {
  data: null,
  isLoading: false
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getItems.fulfilled,
        (state, action:PayloadAction<ItemState>) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
      .addCase(getItems.rejected, (state) => {
        state.isLoading = true;
      })
  },
});

export const getItems = createAsyncThunk(
  "items/incrementAsync",
  async () => {
    const response = await axios.get('http://localhost:3000/items');
    const {data} = response;
    return data;
  }
);

export default itemsSlice.reducer;