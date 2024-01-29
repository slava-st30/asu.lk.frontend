<template>
  <div class="select__wrapper">
    <PseudoInput
      ref="input"
      class="select__input"
      :value="joinedSelectedValues"
      :label="label"
      :readonly="readonly"
      :disabled="disabled"
      :error="error"
      :sm="sm"
      :xs="xs"
      @click="openDropdown"
    />
    
    <Dropdown
      v-if="isDropdownVisible"
      ref="dropdown"
      class="select__dropdown"
      :model-value="modelValue"
      :options="externalOptions"
      @select="select"
      @unselect="unselect"
    />
  </div>
</template>
      
<script setup lang="ts">

import PseudoInput from '../pre-ui/PseudoInput.vue';
import Dropdown from '../pre-ui/Dropdown.vue';
import type { Option } from '@/types';

const props = withDefaults(defineProps<{
  options: any[];
  modelValue: (string | number) | (string | number)[] | null; // array for multi
  label?: string;
  idProp?: string;
  valueProp?: string;
  multi?: boolean;
  sm?: boolean;
  xs?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  error?: string | boolean;
}>(), {
  label: '',
  idProp: 'id',
  modelValue: null,
  valueProp: 'value',
  multi: false,
  sm: false,
  xs: false,
  readonly: false,
  disabled: false,
  error: false,
});

const emit = defineEmits<{
  (evt: 'update:model-value', newModelValue: (string | number) | (string | number)[]): void;
}>();

const externalOptions = computed((): Option[] => props.options.map((option) => ({ id: option[props.idProp], value: option[props.valueProp] })));
const selectedOptions = computed((): Option[] =>
  Array.isArray(props.modelValue) ? props.modelValue.map((id) => externalOptions.value.find((option: Option) => id === option.id))
  : props.modelValue === null ? []
  : [ externalOptions.value.find((option: Option) => props.modelValue === option.id) ]
);
const joinedSelectedValues = computed((): string => selectedOptions.value.map(({ value }: { value: string }) => value).join(', '));

const input = ref(null);
const dropdown = ref(null);
const isDropdownVisible = ref(false);

const openDropdown = () => {
  if (props.readonly || props.disabled) return;
  isDropdownVisible.value = !isDropdownVisible.value;
};

const outsideEventListener = (event: Event) => {
  if (event.target === input.value.$el || input.value.$el.contains(event.target)) return; // клик по инпуту
  if (event.target === dropdown.value.$el || dropdown.value.$el.contains(event.target)) return; // клик по дропдауну
  isDropdownVisible.value = false;
};

watch(isDropdownVisible, async (val: boolean) => {
  if (!val) {
    document.removeEventListener('click', outsideEventListener);
    return;
  }
  await nextTick();
  document.addEventListener('click', outsideEventListener);
});

const select = (id: string | number) => {
  if (props.multi) {
    if (props.modelValue === null)
      emit('update:model-value', [id]);
    else if (!Array.isArray(props.modelValue))
      throw new Error('model-value must be array for multi!');
    else
      emit('update:model-value', props.modelValue.concat(id));
  } else {
    emit('update:model-value', id);
    isDropdownVisible.value = false;
  }
};

const unselect = (id: string | number) => {
  if (!props.multi) return;
  if (!Array.isArray(props.modelValue))
    throw new Error('model-value must be array for multi!');
  emit('update:model-value', props.modelValue.filter((optionId) => optionId !== id));
};

</script>