import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
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
import storage from 'redux-persist/lib/storage';
import { carsReducer } from './cars/carsReducer';
import { favoritesReducer } from './favorites/favoritesReducer';

const favConfig = {
  key: 'favorites',
  version: 1,
  storage,
};

export const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: persistReducer(favConfig, favoritesReducer) ,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);
export { persistor, store };

