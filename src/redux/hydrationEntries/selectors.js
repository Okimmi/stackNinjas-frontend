// hydrationEntries
export const selectEntiesToday = state => state.hydrationEntries.items;
export const selectEntiesMonth = state => state.hydrationEntries.itemsMonth;

export const selectEntiesProgressToday = state => state.hydrationEntries.progressToday;

  //export const selectEntry = state => state.hydrationEnties.items;

export const selectLoading = state => state.hydrationEntries.loading;

export const selectError = state => state.hydrationEntries.error;