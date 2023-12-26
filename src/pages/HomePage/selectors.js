import { createSelector } from 'reselect';

// Вхідний селектор для отримання об'єкта user зі стейту
const selectUser = (state) => state.user;

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
