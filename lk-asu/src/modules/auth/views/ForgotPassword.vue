<template>
  <div class="forgot-password">
    <div class="mt-4 text-base-medium-uppercase">
      Восстановление пароля
    </div>

    <Input
      v-model="email"
      class="mt-4"
      label="Email"
      :error="error"
      @focus="error = false"
    />

    <Button
      class="mt-6"
      text="Получить письмо"
      @click="sendMail"
    />
  </div>
</template>

<script setup lang="ts">

import { forgotPassword as forgotPasswordRequest } from '../api';

const email = ref('');
const error = ref(false);

const sendMail = async () => {
  try {
    const { data } = await forgotPasswordRequest(email.value);
    console.log(data);
  } catch (err) {
    if ((err.response?.status / 100) >> 0 === 4) {
      error.value = err.response?.data?.error?.message || err.message;
    }
    throw err;
  }
};

</script>
