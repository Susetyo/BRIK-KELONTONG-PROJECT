/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type TLoginState = {
  isSigned: boolean;
  isLoading: boolean;
}

const initialState: TLoginState = {
  isSigned: false,
  isLoading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut:(state) =>{
      state.isLoading = false;
      state.isSigned = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSigned = true;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isSigned = false;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isSigned = true;
      })
      .addCase(registerUser.rejected, (state) => {
        state.isLoading = false;
        state.isSigned = false;
      })
  },
});

export const loginUser = createAsyncThunk('login/loginUser',async({
  userName,
  password
}:any)=>{
  try{
    const response = await axios.get(`http://localhost:3000/checkLogin?userName=${userName}&password=${password}`);
    return response
  }catch(err){
    console.log(err)
  }
})

export const registerUser = createAsyncThunk('login/registerUser',async({
  userName,
  password,
  fullName
}:any)=>{
  try{
    const response = await axios.post('http://localhost:3000/user',{
      userName,
      password,
      fullName
    });
    return response
  }catch(err){
    console.log(err)
  }
})

export const { logOut } = loginSlice.actions

export default loginSlice.reducer;