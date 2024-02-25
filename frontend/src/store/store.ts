import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from './items/itemsSlice';
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    modal: modalSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;