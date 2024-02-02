<template>
  <div
    class="table__cell"
    :class="{
      'table__cell--no-wrap': noWrap,
    }"
  >
    <slot>{{ content }}</slot>
  </div>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
  content?: string;
  noWrap?: boolean;
}>(), {
  content: '',
  noWrap: false,
});

</script>

<style lang="scss" scoped>

.table__cell {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  min-height: 48px;

  &:first-child {
    padding-left: 16px;
  }

  &:last-child {
    padding-right: 16px;
  }

  &--no-wrap {
    @apply truncate;
  }
}

</style>