// hydrationEntries
export const selectEntiesToday = state => state.hydrationEntries.items;

export const selectProgress = state => state.hydrationEntries.progress;

export const selectEntiesMonth = state => state.hydrationEntries.itemsMonth;

export const selectLoading = state => state.hydrationEntries.loading;

export const selectError = state => state.hydrationEntries.error;