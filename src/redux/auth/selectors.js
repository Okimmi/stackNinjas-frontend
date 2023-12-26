import { createSelector } from '@reduxjs/toolkit';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = createSelector(
  selectUser,
  (user) => user?.token
);

export const selectDailyWaterRequirement = createSelector(
  selectUser,
  (user) => user?.dailyWaterRequirement
);

export const selectIsError = state => state.auth.isError;

