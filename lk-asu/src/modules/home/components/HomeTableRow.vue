<template>
  <TableCell
    v-if="item && !headers"
    class="item"
  >
    <RouterLink
      :to="{ name: 'profile', params: { id: item.id } }"
    >
      {{ cells[0].content }}
    </RouterLink>
  </TableCell>

  <TableCell
    v-for="({ label, content }, index) in (headers ? cells : cells.slice(1))"
    :key="index"
    class="item"
  >
    {{ content }}
  </TableCell>
</template>

<script setup lang="ts">

import type { Profile } from '@modules/profile/types';

const props = defineProps<{ item: Profile, headers?: any }>();

const cells = computed(() => {
  if (props.headers)
    return Object.keys(props.headers).map((key) => ({ label: key, content: props.headers[key] }));

  const {
    familyName, name, fatherName, birthDate, department, about,
  } = props.item;

  const fullName = [familyName, name, fatherName].join(' ');

  return [
    { label: 'fullName', content: fullName },
    { label: 'department', content: department },
    { label: 'about', content: about },
  ];
});

</script>

<style lang="scss" scoped>

.item {
  &:nth-child(1) {
    width: 564px;
  }
  &:nth-child(2) {
    width: 272px;
  }
  &:nth-child(3) {
    width: 440px;
  }
}

</style>