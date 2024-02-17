import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarById } from "./operations";

const INITIAL_STATE = {
  cars: [],
  page: 1,
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
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
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCar = action.payload;
      })
      .addMatcher(
        isAnyOf(fetchAllCars.pending, fetchAllCars.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(fetchCarById.rejected, fetchCarById.rejected),
        handleRejected
      ),
});

export const { addPage } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
