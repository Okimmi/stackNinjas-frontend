import { createSelector } from 'reselect';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

// Селектор для отримання значення токену з об'єкта user
export const selectToken = createSelector(
  selectUser,
  (user) => user?.token
);

// Селектор для отримання значення dailyWaterRequirement з об'єкта user
export const selectDailyWaterRequirement = createSelector(
  selectUser,
  (user) => user?.dailyWaterRequirement
);
