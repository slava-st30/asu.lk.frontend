import { defineStore } from 'pinia';
import type { User } from '@/types';
import { getUserInfo as getUserInfoRequest } from '@/modules/auth/api';

export const useAuth = defineStore('auth', () => {
  const token = ref('');
  const user = ref<User | null>(null);

  const setToken = (jwt: string, u?: User) => {
    localStorage.token = jwt;
    token.value = jwt;
    if (u) user.value = u;
  };

  (async () => {
    if (!localStorage.token) return;
    token.value = localStorage.token;
    const { data } = await getUserInfoRequest();
    user.value = data;
  })();

  const logOut = () => {
    token.value = '';
    localStorage.removeItem('token');
    user.value = null;
  };

  return {
    token,
    setToken,
    user,
    logOut,
  }
})
