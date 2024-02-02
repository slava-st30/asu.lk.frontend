<template>
  <TableCell
    v-for="({ label, content }, index) in cells"
    :key="index"
    class="item"
  >
    {{ content }}
  </TableCell>
</template>

<script setup lang="ts">

import type { Profile } from '../types';

const props = defineProps<{ item: Profile }>();

const cells = computed(() => {
  const {
    familyName, name, fatherName, birthDate,
  } = props.item;

  return [
    { label: 'familyName', content: familyName },
    { label: 'name', content: name },
    { label: 'fatherName', content: fatherName },
    { label: 'birthDate', content: birthDate?.split('-').reverse().join('.') },
  ];
});

</script>

<style lang="scss" scoped>

.item {
  &:nth-child(1) {
    width: 164px;
  }
  &:nth-child(2) {
    width: 128px;
  }
  &:nth-child(3) {
    width: 180px;
  }
  &:nth-child(4) {
    width: 120px;
  }
}

</style>