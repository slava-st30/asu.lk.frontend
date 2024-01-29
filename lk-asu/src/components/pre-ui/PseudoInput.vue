<template>
  <div
    class="input__wrapper"
    :class="wrapperClasses"
  >
    <div
      class="input"
      :class="inputClasses"
    >
      {{ value }} 
    </div>

    <div
      v-if="label"
      class="input__label"
      :class="labelClasses"
    >
      {{ label }}
    </div>

    <div
      v-if="error && (typeof error === 'string')"
      class="input__error"
    >
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  value: string | number;
  label?: string;
  sm?: boolean;
  xs?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  error?: string | boolean;
  
}>(), {
  label: '',
  sm: false,
  xs: false,
  readonly: false,
  disabled: false,
  error: false,
});

const wrapperClasses = computed(() => ({
  'wrapper--sm': props.sm,
  'wrapper--xs': props.xs,
}));

const inputClasses = computed(() => ({
  'input--error': !!props.error,
  'input--readonly': props.readonly,
  'input--disabled': props.disabled,
}));

const labelClasses = computed(() => ({
  'label--top': !!props.value,
}));

</script>

<style lang="scss" scoped>

.input {
  display: flex;
  align-items: center;
}

</style>