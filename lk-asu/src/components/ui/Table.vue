<template>
  <div
    class="table"
  >
    <div class="table__header">
      <div class="table__row">
        <slot
          name="default"
          :item="headers"
        />
      </div>
    </div>

    <div class="table__content">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="table__row"
      >
        <slot
          name="default"  
          :item="item"
        />
      </div>
    </div>   
  </div>
</template>

<script lang="ts" setup>

const props = withDefaults(defineProps<{
  items: any[];
  headers: any;
}>(), {
  //
});

</script>

<style lang="scss" scoped>

.table {
  display: flex;
  flex-direction: column;
  position: relative;
  width: fit-content;

  &__header {
    @apply text-sm-regular;
  }

  &__content {
    //
  }

  &__row {
    display: flex;
    border-bottom: 1px solid;
    @apply border-additional-300;
  }
}

</style>