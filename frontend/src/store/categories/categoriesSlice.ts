/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type TCategory = {
  data: any;
  isLoading: boolean;
}

const initialState: TCategory = {
  data: null,
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action:PayloadAction<TCategory>) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
      .addCase(getCategories.rejected, (state) => {
        state.isLoading = true;
      })
  },
});

export const getCategories = createAsyncThunk(
  "items/getCategories",
  async () => {
    const response = await axios.get('http://localhost:3000/category');
    const {data} = response;
    return data;
  }
);

export default categoriesSlice.reducer;