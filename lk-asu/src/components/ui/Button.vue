<template>
  <Component
    :is="tag"
    v-bind="mergedAttrs"
    class="btn h-10"
    :class="{
      'btn--has-text': hasText,
    }"
  >
    <span
      v-if="hasText"
      class="btn__text"
    >
      <slot>{{ text }}</slot>
    </span>
  </Component>
</template>

<script lang="ts" setup>

import { defineComponent, defineAsyncComponent } from 'vue';

const props = withDefaults(defineProps<{
  text?: string;
  tag?: string | ReturnType<typeof defineComponent> | ReturnType<typeof defineAsyncComponent>;
}>(), {
  text: '',
  tag: 'button',
});

const attrs = useAttrs();
const slots = useSlots();

const mergedAttrs = computed<ReturnType<typeof useAttrs>>(() => ({
  type: props.tag === 'button' ? 'button' : undefined,
  ...attrs,
}));

const hasText = computed(() => Boolean(slots.default ?? props.text));

</script>

<style lang="scss" scoped>
.btn {
  @apply text-base-regular;
  border-radius: 12px;
  outline: 4px solid transparent;
  padding: 6px 16px;
  color: theme('colors.white');
  background-color: theme('colors.additional.DEFAULT');
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  position: relative;
}
</style>
