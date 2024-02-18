import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = [];

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: INITIAL_STATE,
    reducers: {
    addCar(state, action) {
      state.push(action.payload);
        },
    deleteCar(state, action) {
      state = state.filter(car => car.id !== action.payload);
    },
  },
});
export const { addCar, deleteCar } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;