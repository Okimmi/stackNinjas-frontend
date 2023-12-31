import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateAvatar,
  updateDailyNormal,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUserData: () => initialState,
  },
  extraReducers: builder => {
    //fullfilled
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isRefreshing = false;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(updateDailyNormal.fulfilled, (state, action) => {
      state.user.dailyWaterRequirement = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.user.avatar = action.payload;
      state.isRefreshing = false;
    });
    //pending
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(updateDailyNormal.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(register.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(logIn.pending, state => {
      state.isRefreshing = true;
    });
    builder.addCase(updateAvatar.pending, state => {
      state.isRefreshing = true;
    });
    //rejected
    builder.addCase(refreshUser.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(updateDailyNormal.rejected, state => {
      state.isRefreshing = false;
    });
    builder.addCase(logIn.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
    builder.addCase(updateAvatar.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
  },
});

export const { clearUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
