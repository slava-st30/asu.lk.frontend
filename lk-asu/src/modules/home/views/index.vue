<template>
  <div class="mt-4 text-lg-medium-uppercase">
    Добро пожаловать!

    <Table
      :header="mockTableData.header"
      :items="mockTableData.content"
    >
      <template>
        <div
          v-for="{ label, content } in cells"
          :key="label"
          class="table__cell"
          :content="content"
        />
      </template>
    </Table>
  </div>
</template>

<script setup lang="ts">

import { mockTableData } from '@/mock';

interface Profile {
  familyName?: string;
  name: string;
  fatherName?: string;
  birthDate?: string | Date;
}

const cells = [

]

</script>
