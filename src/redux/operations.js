import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestCars } from '/src/services/api';


export const fetchAllCars = createAsyncThunk(
  'cars',
  async (_, thunkAPI) => {
    try {     
      const cars = await requestCars();
      return cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);