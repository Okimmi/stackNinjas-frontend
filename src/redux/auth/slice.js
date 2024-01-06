import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  restoreUserPass,
  updateAvatar,
  updateDailyNormal,
  updateUserData,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isError: null,
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
      state.isError = null;
    });
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isError = null;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshing = false;
      state.isError = null;
    });
    builder.addCase(restoreUserPass.fulfilled, (state, action) => {
      state.isRefreshing = false;
      state.isError = null;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(updateDailyNormal.fulfilled, (state, action) => {
      state.user.dailyWaterRequirement = action.payload;
      state.isRefreshing = false;
      state.isError = null;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.user.avatar = action.payload;
      state.isError = null;
    });
    builder.addCase(updateUserData.fulfilled, (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isRefreshing = false;
      state.isError = null;
    });
    //pending
    builder.addCase(refreshUser.pending, state => {
      state.isRefreshing = true;
      state.isError = null;
    });
    builder.addCase(updateDailyNormal.pending, state => {
      state.isRefreshing = true;
      state.isError = null;
    });
    builder.addCase(register.pending, state => {
      state.isRefreshing = true;
      state.isError = null;
    });
    builder.addCase(logIn.pending, state => {
      state.isRefreshing = true;
      state.isError = null;
    });
    builder.addCase(updateUserData.pending, state => {
      state.isRefreshing = true;
      state.isError = null;
    });
    builder.addCase(restoreUserPass.pending, state => {
      state.isRefreshing = true;
      state.isError = null;
    });
    //rejected
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
    builder.addCase(updateDailyNormal.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
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
    builder.addCase(updateUserData.rejected, (state, action) => {
      state.isError = action.payload;
      state.isRefreshing = false;
    });
    builder.addCase(restoreUserPass.rejected, (state, action) => {
      state.isRefreshing = false;
      state.isError = action.payload;
    });
  },
});

export const { clearUserData } = authSlice.actions;
export const authReducer = authSlice.reducer;
