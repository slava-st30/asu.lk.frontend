<template>
  <div class="input__container">
    <div
      class="input__wrapper"
      :class="wrapperClasses"
    >
      <div class="input">
        {{ value }} 
      </div>

      <div
        v-if="label"
        class="input__label label--top"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  value: string | number;
  label?: string;
  sm?: boolean;
  xs?: boolean;
}>(), {
  label: '',
  sm: false,
  xs: false,
});

const wrapperClasses = computed(() => ({
  'wrapper--sm': props.sm,
  'wrapper--xs': props.xs,
}));

</script>