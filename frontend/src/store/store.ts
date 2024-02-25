import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from './items/itemsSlice';
import modalSlice from "./modal/modalSlice";
import loginSlice from "./login/loginSlice";
import categoriesSlice from "./categories/categoriesSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    modal: modalSlice,
    user: loginSlice,
    categories: categoriesSlice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;