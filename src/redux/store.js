import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { hydrationEntriesReducer } from "./hydrationEntries/slice";
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const hydrationEntriesPersistConfig = {
  key: 'hydrationEntries',
  storage,
  whitelist: ['items', 'itemsMonth'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    hydrationEntries: persistReducer(hydrationEntriesPersistConfig, hydrationEntriesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);