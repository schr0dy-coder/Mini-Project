import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from './constants';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});
console.log(import.meta.env.VITE_API_URL);

api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
},
(error) => Promise.reject(error)
);

export default api;