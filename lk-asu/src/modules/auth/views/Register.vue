
<template>
  <div class="register">
    <div class="mt-4 text-base-medium-uppercase">
      Регистрация
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
      class="mt-4"
      label="Пароль"
      type="password"
      :error="passwordError"
      @focus="passwordError = false"
    />

    <Input
      v-model="passwordAgain"
      class="mt-6"
      label="Повторите пароль"
      type="password"
      :error="passwordError"
      @focus="passwordError = false"
    />

    <Button
      class="mt-6"
      text="Зарегистрироваться"
      @click="register"
    />
  </div>
</template>

<script setup lang="ts">

import { register as registerRequest } from '../api';
import { useAuth } from '@/modules/auth/store';

const email = ref('');
const password = ref('');
const passwordAgain = ref('');
const error = ref(false);
const passwordError = ref(false);

const { setToken } = useAuth();
const router = useRouter();

const register = async () => {
  try {
    if (password.value !== passwordAgain.value) {
      passwordError.value = 'Разные пароли!';
      throw new Error('Разные пароли!');
    }
    const { data: { jwt, user } } = await registerRequest(email.value, email.value, password.value);
    setToken(jwt, user);
    router.push({ name: 'home' });
  } catch (err) {
    if ((err.response?.status / 100) >> 0 === 4) {
      error.value = err.response?.data?.error?.message || err.message;
    }
    throw err;
  }
}

</script>
