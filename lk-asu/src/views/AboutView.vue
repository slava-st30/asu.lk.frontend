<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.about {
  @apply lg:min-h-screen lg:flex lg:items-center;

  h1 {
     @apply text-xl font-medium text-white;
  }
}
</style>
