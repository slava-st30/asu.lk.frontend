<template>
  <div
      class="input__wrapper"
      :class="wrapperClasses"
    >
      <input
        v-model="externalValue"
        ref="input"
        class="input"
        :class="inputClasses"
        :maxlength="maxlength"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
        @focus="emit('focus', $event)"
      />

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
  modelValue: string | number;
  label?: string;
  maxlength?: number;
  sm?: boolean;
  xs?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  error?: string | boolean;
  type?: string;
}>(), {
  label: '',
  maxlength: 100,
  sm: false,
  xs: false,
  readonly: false,
  disabled: false,
  error: false,
  type: 'text',
});

const emit = defineEmits<{
  (evt: 'update:model-value', newModelValue: string | number): void;
  (evt: 'focus', event: Event): void;
}>();

const externalValue = computed({
  get() {
    return props.modelValue;
  },
  set(value: string | number) {
    emit('update:model-value', value);
  },
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
  'label--top': !!props.modelValue,
}));

</script>