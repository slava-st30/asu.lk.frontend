<template>
  <div class="kit">
    <div class="block colors">
      <div class="col">
        <div class="bar bg-white with-border" />
        <div class="bar bg-black" />
      </div>

      <div class="col">
        <div class="bar bg-main" />
        <div class="bar bg-main-500" />
        <div class="bar bg-main-400" />
        <div class="bar bg-main-350" />
        <div class="bar bg-main-300" />
        <div class="bar bg-main-200" />
        <div class="bar bg-main-100" />
        <div class="bar bg-main-50" />
      </div>

      <div class="col">
        <div class="bar bg-additional" />
        <div class="bar bg-additional-300" />
        <div class="bar bg-additional-200" />
        <div class="bar bg-additional-100" />
      </div>

      <div class="col">
        <div class="bar bg-positive" />
        <div class="bar bg-positive-light" />
      </div>

      <div class="col">
        <div class="bar bg-attention" />
        <div class="bar bg-attention-light" />
        <div class="bar bg-attention-300" />
        <div class="bar bg-attention-200" />
      </div>

      <div class="col">
        <div class="bar bg-negative" />
        <div class="bar bg-negative-light" />
        <div class="bar bg-negative-200" />
      </div>

      <div class="col">
        <div class="bar bg-purple" />
        <div class="bar bg-purple-50" />
      </div>      
    </div>

    <div class="block fonts">
      <div class="col">
        <div class="text-2xl-semibold">{{ text }}</div>
        <div class="mt-2 text-xl-semibold">{{ text }}</div>
        <div class="mt-2 text-lg-semibold">{{ text }}</div>
        <div class="mt-2 text-sm-semibold">{{ text }}</div>

        <div class="mt-2 text-lg-medium-uppercase">{{ text }}</div>
        <div class="mt-2 text-base-medium-uppercase">{{ text }}</div>
        <div class="mt-2 text-sm-medium-uppercase">{{ text }}</div>
        <div class="mt-2 text-xs-medium-uppercase">{{ text }}</div>
        
        <div class="mt-2 text-lg-medium">{{ text }}</div>
        <div class="mt-2 text-base-medium">{{ text }}</div>
        <div class="mt-2 text-sm-medium">{{ text }}</div>
        <div class="mt-2 text-xs-medium">{{ text }}</div>

        <div class="mt-2 text-lg-regular">{{ text }}</div>
        <div class="mt-2 text-base-regular">{{ text }}</div>
        <div class="mt-2 text-sm-regular">{{ text }}</div>
        <div class="mt-2 text-xs-regular">{{ text }}</div>
        <div class="mt-2 text-xxs-regular">{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<style setup lang="scss">

  .kit {
    .block {
      display: flex;
      flex-direction: row;
      margin-top: 12px;

      .col {
        display: flex;
        flex-direction: column;

        .bar {
          height: 24px;
          width: 172px;

          &.with-border {
            border: 1px solid;
            @apply border-black;

          }
        }

        .bar + .bar {
          margin-top: 8px;
        }
      }

      .col + .col {
        margin-left: 12px;
      }
    }
  }

</style>

<script setup lang="ts">
  const text = 'Съешь ещё этих мягких французских булок, да выпей чаю';
</script>

