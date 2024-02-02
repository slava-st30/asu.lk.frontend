<template>
  <div
    class="table"
  >
    <div class="table__header">
      <div class="table__row">
        <TableCell
          v-for="({ key, title }, index) in headers"
          :key="index"
        >
          {{ title }}
        </TableCell>
      </div>
    </div>

    <div class="table__content">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="table__row"
      >
        <slot :item="item" />
      </div>
    </div>   
  </div>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
  items: any[];
  headers: { key: string, title: string }[];
}>(), {
  //
});

</script>

<style lang="scss" scoped>

.table {
  display: flex;
  flex-direction: column;
  position: relative;

  &__header {
    @apply text-sm-regular;
  }

  &__content {

  }

  &__row {
    display: flex;;
  }
}

</style>