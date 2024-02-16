import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from './operations';

const INITIAL_STATE = {
  cars: [],
  favoriteCars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
    name: 'cars',
    initialState: INITIAL_STATE,
    extraReducers: (builder) =>
        builder
        .addCase(fetchAllCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  })

  export const rootReducer = carsSlice.reducer;