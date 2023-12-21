<script setup lang="ts">
import CarList from "./CarList.vue";

const runtimeConfig = useRuntimeConfig()

const {data: res, pending, error, refresh} = await useFetch(`${runtimeConfig.public.carsApi}/popular`, {
  method: "GET",
  headers: {"Content-Type": "application/json"}
})
</script>

<template>
  <section>
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-secondary-300 text-base font-semibold ">Popular Cars</h2>
      <base-button styling="none" content="View All"/>
    </div>
    <span v-if="pending">
      LOADING...
    </span>
    <car-list v-if="res.data && !pending" :cars="res.data"/>
    <p v-if="error">
      {{ error }}
    </p>
  </section>
</template>

<style scoped lang="postcss">

</style>