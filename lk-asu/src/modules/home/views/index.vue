<template>
  <div class="mt-4 text-lg-medium-uppercase">
    Заголовок
  </div>

  <Table
    :headers="mockTableData.headers"
    :items="mockTableData.content"
  >
    <template #default="{ item, headers }">
      <HomeTableRow
        :item="item"
        :headers="headers"
      />
    </template>
  </Table>
</template>

<script setup lang="ts">

import HomeTableRow from '../components/HomeTableRow.vue'
import { mockTableData } from '@/mock';

</script>