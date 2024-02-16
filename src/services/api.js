import axios from "axios";

const instance = axios.create({
  baseURL: 'https://65ce534ac715428e8b407df8.mockapi.io/',
});

export const requestCars = async () => {
  const { data } = await instance.get('/cars');
  return data;
};

