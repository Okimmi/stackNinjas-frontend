import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
      //fullfilled
      builder.addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      builder.addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      builder.addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      builder.addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      //pending
      builder.addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      //rejected
      builder.addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
    },
  });
  
  export const authReducer = authSlice.reducer;
  