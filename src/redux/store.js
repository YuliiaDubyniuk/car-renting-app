import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { carsReducer } from './cars/carsReducer';
import { favoritesReducer } from './favorites/favoritesReducer';


export const rootReducer = combineReducers({
  cars: carsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer
});
