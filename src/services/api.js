import axios from "axios";

axios.defaults.baseURL = 'https://65ce534ac715428e8b407df8.mockapi.io/';


export const requestCars = async (params) => {
  
  const { data } = await axios.get(`/cars?limit=12&${params}`);
  return data;
};

