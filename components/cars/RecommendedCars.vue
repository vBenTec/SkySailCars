<script setup lang="ts">
import CarList from "./CarList.vue";

const runtimeConfig = useRuntimeConfig()

const {data: res, pending, error, refresh} = await useFetch(runtimeConfig.public.carsApi, {
  method: "GET",
  headers: {"Content-Type": "application/json"}
})
</script>

<template>
  <section class="flex flex-col">
    <h2 class="text-secondary-300 text-base font-semibold mb-6">Recommendation Car</h2>
    <span v-if="pending">
      LOADING...
    </span>
    <car-list class="mb-8" v-if="res?.data && !pending" :cars="res?.data"/>
    <p v-if="error">
      {{ error }}
    </p>
    <base-button class="mx-auto" content="Show more cars"/>
  </section>
</template>

<style scoped lang="postcss">

</style>