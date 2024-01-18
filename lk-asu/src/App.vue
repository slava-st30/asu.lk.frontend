<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink class="ml-2" to="/ui-kit">UI Kit</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>


<style scoped>

</style>
