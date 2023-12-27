export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectAvatar = state => state.auth.user?.avatar;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsError = state => state.auth.isError;
