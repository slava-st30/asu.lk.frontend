
<template>
  <div class="auth">
    <div class="mt-4 text-base-medium-uppercase">
      Авторизация
    </div>

    <Input
      v-model="email"
      class="mt-4"
      label="Email"
      :error="error"
      @focus="error = false"
    />

    <Input
      v-model="password"
      class="mt-6"
      label="Пароль"
      type="password"
      :error="error"
      @focus="error = false"
    />

    <Button
      class="mt-6"
      text="Войти"
      @click="auth"
    />

    <div class="mt-4">
      <RouterLink :to="{ name: 'auth/register' }">Зарегистрироваться</RouterLink>
      <RouterLink class="ml-4" :to="{ name: 'auth/forgot_password' }">Забыли пароль?</RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">

import { auth as authRequest } from '../api';
import { useAuth } from '@/stores/auth';

const email = ref('');
const password = ref('');
const error = ref(false);
const { setToken } = useAuth();
const router = useRouter();

const auth = async () => {
  try {
    const { data: { jwt, user } } = await authRequest(email.value, password.value);
    setToken(jwt, user);
    router.push({ name: 'home' });
  } catch (err) {
    if ((err.response?.status / 100) >> 0 === 4) {
      error.value = err.response?.data?.error?.message || err.message;
    }
    throw err;
  }
};

</script>
