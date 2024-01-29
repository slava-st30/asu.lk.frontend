<template>
  <div class="select__container">
    <div class="select__wrapper">
      <PseudoInput
        class="select__input"
        :value="joinedSelectedValues"
        :label="label"
      />
      
      <Dropdown
        class="select__dropdown"
        :options="externalOptions"
        :selected-ids="selectedIds"
      />
    </div>
  </div>
</template>
      
<script setup lang="ts">

import PseudoInput from '../pre-ui/PseudoInput.vue';
import Dropdown from '../pre-ui/Dropdown.vue';

interface Option {
  id: string | number;
  value: string;
}

const props = withDefaults(defineProps<{
  options: any[];
  selectedIds: (string | number)[];
  label?: string;
  idProp?: string;
  valueProp?: string;
  multiselect?: boolean;
}>(), {
  label: '',
  idProp: 'id',
  valueProp: 'value',
  multiselect: false,
});

const externalOptions = computed((): Option[] => props.options.map((option) => ({ id: option[props.idProp], value: option[props.valueProp] })));
const selectedOptions = computed((): Option[] =>  props.selectedIds.map((id) => externalOptions.value.find((option: Option) => id === option.id)));
const joinedSelectedValues = computed((): string => selectedOptions.value.map(({ value }: { value: string }) => value).join(', '));

</script>