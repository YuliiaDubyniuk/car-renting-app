import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestCars } from '/src/services/api';


export const fetchAllCars = createAsyncThunk(
  'cars/getAll',
  async (params, thunkAPI) => {
    try {     
      const cars = await requestCars(params);
      return cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

