import { API_URL } from "@/consts";
import { api } from '@/api';

export const auth = (identifier: string, password: string) => api.post(`${API_URL}/auth/local`, {
  identifier,
  password,
});

export const getUserInfo = () => api.get(`${API_URL}/users/me`);

export const register = (username: string, email: string, password: string) => api.post(`${API_URL}/auth/local/register`, {
  username,
  email,
  password,
});

export const forgotPassword = (email: string) => api.post(`${API_URL}/auth/forgot-password`, { email });