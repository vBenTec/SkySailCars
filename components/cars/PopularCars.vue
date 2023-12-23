<script setup lang="ts">
import CarList from "@/components/cars/CarList.vue";
import {useCarStore} from "@/stores/carStore.ts";
import {storeToRefs} from "pinia";

const runtimeConfig = useRuntimeConfig()
const carStore = useCarStore()
const {setList} = carStore
const {popularList} = storeToRefs(carStore)

const {data: res, pending, error, refresh} = await useFetch(`${runtimeConfig.public.carsApi}/popular`, {
  method: "GET",
  headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'}, // HEADER should be set on the server for this route
  query: {
    page: 1,
  }
})

watchEffect(() => {
  if (res.value) {
    setList(res.value, 'POPULAR')
  }
})
</script>

<template>
  <section>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-secondary-300 text-base font-semibold ">Popular Car</h2>
      <base-button class="text-primary-500" styling="none" content="View All"/>
    </div>

    <span v-if="pending">
      LOADING...
    </span>
    <client-only>
      <car-list v-if="(res|| popularList) && !pending" :cars="popularList" list-type="POPULAR" boxing="scroll-box"/>
    </client-only>

    <p v-if="!res?.length">No Cars found</p>
    <p v-if="error">
      <base-button @click="refresh()" class="mx-auto" content="Retry"/>
      {{ error }}
    </p>
  </section>
</template>

<style scoped lang="postcss">

</style>