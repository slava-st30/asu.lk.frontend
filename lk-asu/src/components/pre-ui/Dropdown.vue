<template>
  <div class="dropdown__container">
    <div class="dropdown__wrapper">
      <div
        v-for="(option, index) in externalOptions"
        :key="index"
        class="dropdown__item"
        :class="{
          'selected': isSelected(option.id),
        }"
        @click="select(option.id)"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { Option } from '@/types';

const props = withDefaults(defineProps<{
  options: any[];
  modelValue: (string | number) | (string | number)[] | null;
  idProp?: string;
  valueProp?: string;
}>(), {
  idProp: 'id',
  valueProp: 'value',
});

const emit = defineEmits<{
  (evt: 'select', optionId: string | number): void;
  (evt: 'unselect', optionId: string | number): void;
}>();

const externalOptions = computed((): Option[] => props.options.map((option) => ({ id: option[props.idProp], value: option[props.valueProp] })));
const selectedOptions = computed((): Option[] =>
  Array.isArray(props.modelValue) ? props.modelValue.map((id) => externalOptions.value.find((option: Option) => id === option.id))
  : props.modelValue === null ? []
  : [ externalOptions.value.find((option: Option) => props.modelValue === option.id) ]
);

const isSelected = (id: string | number) => selectedOptions.value.map((option: Option) => option.id).includes(id);
const select = (id: string | number) => {
  if (isSelected(id)) 
    emit('unselect', id);
  else
    emit('select', id);
}

</script>

<style scoped lang="scss">

.dropdown__container {
  height: auto;
  max-height: 190px;
  border-radius: 12px;
  overflow: hidden;
  border-width: 1px;
  @apply border-additional-200;

  .dropdown__wrapper {
    height: 100%;
    width: 100%;
    overflow-y: auto;

    .dropdown__item {
      height: 38px;
      width: 100%;
      padding: 4px 8px;
      @apply bg-white;

      & + .dropdown__item {
        border-top-width: 1px;
        @apply border-additional-200;
      }

      &.selected {
        @apply bg-attention-200;
      }

      &:hover {
        cursor: pointer;
        @apply bg-positive-light;
      }
    }
  }
}

</style>