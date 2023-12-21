<script setup lang="ts">
import CarList from "./CarList.vue";

const runtimeConfig = useRuntimeConfig()

const {data: res, pending, error, refresh} = await useFetch(runtimeConfig.public.carsApi, {
  method: "GET",
  headers: {"Content-Type": "application/json"}
})
</script>

<template>
  <section>
    <span v-if="pending">
      LOADING...
    </span>
    <car-list v-if="res.data && !pending" :cars="res.data"/>
  </section>
</template>

<style scoped lang="postcss">

</style>