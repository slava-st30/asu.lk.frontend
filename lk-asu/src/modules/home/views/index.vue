<template>
  <div class="mt-4 text-lg-medium-uppercase">
    Добро пожаловать!
  </div>

  <Table
    :headers="mockTableData.headers"
    :items="mockTableData.content"
  >
    <template #default="{ item }">
      <HomeTableRow :item="item" />
    </template>
  </Table>
</template>

<script setup lang="ts">

import HomeTableRow from '../components/HomeTableRow.vue'
import { mockTableData } from '@/mock';

</script>