/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Config } from "../../config/config";
import { TDeleteItem, TGetItems, TItemSlice } from './types';

const initialState: TItemSlice = {
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
        state.data = null;
      })
      .addCase(
        getItems.fulfilled,
        (state, action) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
      .addCase(getItems.rejected, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true;
        state.data = null;
      })
      .addCase(
        deleteItem.fulfilled,
        (state, action) => {
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
        (state, action) => {
          state.data = action.payload
          state.isLoading = false
        }
      )
      .addCase(addItem.rejected, (state) => {
        state.isLoading = true;
      })
  },
});


export const getItems = createAsyncThunk("items/getItems",
  async ({page, search}:TGetItems) => {
    const response = await axios.get(`${Config.baseUrl}/items?page=${page}&size=20&name=${search}`);
    const {data} = response;
    return data;
  }
);

export const deleteItem = createAsyncThunk("items/deleteItem",
  async ({id,items}:TDeleteItem) => {
    const response = await axios.delete(`${Config.baseUrl}/items/${id}`);
    const {data} = response;
    const newItems = items?.items.filter((item:any) => item.id !== parseInt(data?.id));
    const result = {
      ...items,
      items:newItems
    }
    return result;
  }
);

export const addItem = createAsyncThunk("items/addItem",
  async ({ sendData, items}:any) => {
    const response = await axios.post(`${Config.baseUrl}/items`,sendData);
    const {data} = response;
    const newItems = items?.items.push(data);
    const result = { ...items, items:newItems}
    return result;
  }
);

export const editItem = createAsyncThunk("items/editItem",
  async ({ sendData, items}:any) => {
    const response = await axios.put(`${Config.baseUrl}/items/${sendData?.id}`,sendData);
    const {data} = response;
    const newItems = items?.items.push(data);
    const result = { ...items, items:newItems}
    return result;
  }
);

export default itemsSlice.reducer;