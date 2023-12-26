import { createSelector } from 'reselect';
const selectUser = (state) => state.user;

// Селектор для отримання значення dailyWaterRequirement з об'єкта user
export const selectDailyWaterRequirement = createSelector(
  selectUser,
  (user) => user?.dailyWaterRequirement
);