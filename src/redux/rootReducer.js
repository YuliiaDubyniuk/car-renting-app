import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  cars: [],
  favorite: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
    name: 'water',
    initialState: INITIAL_STATE,
    extraReducers: (builder) =>
        builder
            // .addCase(todayWaterThunk.fulfilled, (state, action) => {
            //     state.isLoading = false;
            //     state.todayWaterConsumption = action.payload;
            //     state.error = null;
            // })
  })

  export const rootReducer = carsSlice.reducer;