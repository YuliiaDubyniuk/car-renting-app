import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars } from "./operations";

const INITIAL_STATE = {
  cars: [],
  page: 1,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    addPage(state) {
      state.page = state.page + 1;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars.push(...action.payload);
      })
      
      .addCase(fetchAllCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const { addPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
