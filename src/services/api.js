import axios from "axios";

const instance = axios.create({
  baseURL: 'https://65ce534ac715428e8b407df8.mockapi.io/',
});

export const requestCars = async (page) => {
  axios.defaults.params = {
    per_page: 12,
    page,
  };
  const { data } = await instance.get('/cars');
  return data;
};

export const requestCarById = async (carId) => {
   const { data } = await instance.get(`/cars/${carId}`);
  return data;
}