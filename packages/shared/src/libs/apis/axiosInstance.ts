import axios from 'axios';
import { checkUrl } from 'shared/utils';
import { authUrl } from 'shared/libs';

export const axiosInstance = axios.create({
  baseURL: '/api/v1',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.url && checkUrl(config.url)) {
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
    // 요청 url이 /auth/verify/ 이라면 data를 반환
    if (error.config.url === authUrl.postVerify()) return error.response.data;

    return Promise.reject(error);
  }
);
