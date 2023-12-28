// Contacts
export const selectEntiesToday = state => state.hydrationEnties.items;
export const selectEntiesMonth = state => state.hydrationEnties.itemsMonth;
export const selectEntiesProgressToday = state => state.hydrationEnties.progressToday;
//export const selectEntry = state => state.hydrationEnties.items;
export const selectLoading = state => state.hydrationEnties.loading;
export const selectError = state => state.hydrationEnties.error;