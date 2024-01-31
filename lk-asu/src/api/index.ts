import axios from 'axios';
import type { AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';

const { isAxiosError, isCancel } = axios;
interface CustomAxiosInstance extends AxiosInstance {
  postWithFile: (url: string, data: FormData, config?: AxiosRequestConfig<FormData>) => ReturnType<AxiosInstance['post']>
}
const api = axios.create() as CustomAxiosInstance;

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
    }

    throw error;
  },
);

export {
  api,
  isAxiosError as isAPIError,
  isCancel as isCancelError,
};

export type {
  AxiosResponse as APIResponse,
};