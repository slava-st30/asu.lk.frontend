<template>
  <button
    type="button"
    class="btn h-10"
  >
    <span
      class="btn__text"
    >
      <slot>{{ text }}</slot>
    </span>
  </button>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: '',
});

</script>

<style lang="scss" scoped>
.btn {
  @apply text-base-regular;
  border-radius: 12px;
  outline: 4px solid transparent;
  padding: 6px 16px;
  color: theme('colors.white');
  background-color: theme('colors.additional.DEFAULT');
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  position: relative;
}
</style>
