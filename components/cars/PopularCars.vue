<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const {data, pending, error, refresh} = await useFetch(runtimeConfig.public.carsApi, {
  method: "GET",
  headers: {"Content-Type": "application/json"}
})
</script>

<template>
  <section>Popular Feed
  </section>
</template>

<style scoped lang="postcss">

</style>