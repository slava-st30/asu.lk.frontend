<template>
  <div class="dropdown__container">
    <div class="dropdown__wrapper">
      <div
        v-for="(option, index) in externalOptions"
        :key="index"
        class="dropdown__item"
        :class="{
          'selected': selectedIds.includes(option.id),
        }"
      >
        {{ option.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

interface Option {
  id: string | number;
  value: string;
}

const props = withDefaults(defineProps<{
  options: any[];
  selectedIds: (string | number)[];
  idProp?: string;
  valueProp?: string;
}>(), {
  idProp: 'id',
  valueProp: 'value',
});

const externalOptions = computed((): Option[] => props.options.map((option) => ({ id: option[props.idProp], value: option[props.valueProp] })));

const emit = defineEmits<{
  (evt: 'select', optionId: string | number): void;
  (evt: 'unselect', optionId: string | number): void;
}>();

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

      & + .dropdown__item {
        border-top-width: 1px;
        @apply border-additional-200;
      }

      &.selected {
        @apply bg-alternative-50;
      }

      &:hover {
        cursor: pointer;
        @apply bg-positive-light;
      }
    }
  }
}

</style>