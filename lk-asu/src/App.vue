<template>
  <div class="menu">
    <div class="tabs">
      <RouterLink :to="{ name: 'home' }">Главная</RouterLink>
      <RouterLink class="ml-3" :to="{ name: 'ui_kit' }">UI Kit</RouterLink>
    </div>

    <div class="actions">
      <div
        v-if="user"
        class="text-base-medium-uppercase"
      >
        {{ user.username }}
      </div>

      <Button
        v-if="user"
        class="ml-4"
        text="Выйти"
        @click="authStore.logOut"
      />
      <RouterLink
        v-else
        :to="{ name: 'auth' }"
      >Войти</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<script setup lang="ts">

import { useAuth } from '@/stores/auth';

const authStore = useAuth();

const user = computed(() => authStore.user);

</script>

<style lang="scss" scoped>

.menu {
  display: flex;
  justify-content: space-between;
}

.actions {
  display: flex;
  align-items: center;
}

</style>
