/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Config } from "../../config/config";

type TLoginState = {
  isLoading: boolean;
  error: string | null
}

const initialState: TLoginState = {
  isLoading: false,
  error: null
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut:(state) =>{
      state.isLoading = false;
      state.error = null;
      localStorage.removeItem('user')
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        localStorage.setItem('user', JSON.stringify(action.payload.data))
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Wrong user name and password !';
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state,action) => {
        localStorage.setItem('user', JSON.stringify(action.payload.data))
        state.isLoading = false;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const loginUser = createAsyncThunk('login/loginUser',async({
  userName,
  password
}:any)=>{
  const response = await axios.post(`${Config.baseUrl}/checkLogin`,{userName, password});
  return response
})

export const registerUser = createAsyncThunk('login/registerUser',async({
  userName,
  password,
  fullName
}:any)=>{
  const response = await axios.post(`${Config.baseUrl}/user`,{
    userName,
    password,
    fullName
  });
  return response
})

export const { logOut } = loginSlice.actions

export default loginSlice.reducer;