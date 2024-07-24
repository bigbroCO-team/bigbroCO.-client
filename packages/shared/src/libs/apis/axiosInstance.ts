import axios from 'axios';
import { checkUrl } from 'shared/utils';

export const axiosInstance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.url && checkUrl(config.url)) {
    console.log(config);

    return config;
  }

  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  // todo refresh 로직 추가

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }

    return Promise.reject(response.data);
  },
  (error) => {
    if (error.response.data) return error.response.data;

    return Promise.reject(error);
  }
);
