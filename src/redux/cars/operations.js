import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestCars } from '/src/services/api';


export const fetchAllCars = createAsyncThunk(
  'cars/getAll',
  async (page, thunkAPI) => {
    try {     
      const cars = await requestCars(page);
      return cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'cars/getById',
  async (id, thunkAPI) => {
    try {     
      const cars = await requestCars(id);
      return cars;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);