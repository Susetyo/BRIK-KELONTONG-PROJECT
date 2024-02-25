/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


type ItemState = {
  data: any;
  isLoading: boolean;
}

const initialState: ItemState = {
  data: null,
  isLoading: false,
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
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteItem.fulfilled,
        (state, action:PayloadAction<ItemState>) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
      .addCase(deleteItem.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(addItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addItem.fulfilled,
        (state, action:PayloadAction<ItemState>) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
      .addCase(addItem.rejected, (state) => {
        state.isLoading = true;
      })
  },
});

export const getItems = createAsyncThunk(
  "items/getItems",
  async () => {
    const response = await axios.get('http://localhost:3000/items?size=100');
    const {data} = response;
    return data;
  }
);

export const deleteItem = createAsyncThunk(
  "items/deleteItem",
  async ({id,items}:any) => {
    const response = await axios.delete(`http://localhost:3000/items/${id}`);
    const {data} = response;
    const newItems = items?.items.filter((item:any) => item.id !== parseInt(data?.id));
    const result = {
      ...items,
      items:newItems
    }
    return result;
  }
);

export const addItem = createAsyncThunk(
  "items/addItem",
  async ({
    sendData,
    items
  }:any) => {
    const {
      sku,
      name, 
      description,
      weight, 
      width, 
      length, 
      height, 
      image, 
      harga,
      category_id
    } = sendData;

    const response = await axios.post('http://localhost:3000/items',{
      sku,
      name, 
      description,
      weight, 
      width, 
      length, 
      height, 
      image, 
      harga,
      category_id
    });

    const {data} = response;
    const newItems = items?.items.push(data);
    const result = {
      ...items,
      items:newItems
    }

    return result;
  }
);

export default itemsSlice.reducer;