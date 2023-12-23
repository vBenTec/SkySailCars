<script setup lang="ts">
import CarList from "@/components/cars/CarList.vue";
import {useCarStore} from "@/stores/carStore.ts";
import {storeToRefs} from "pinia";

// ************* TYPES ************* //
interface Props {
  showMoreBtn?: boolean;
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  showMoreBtn: true
})
const runtimeConfig = useRuntimeConfig()
const carStore = useCarStore()
const {setList} = carStore
const {recommendedList} = storeToRefs(carStore)

const {data: res, pending, error, refresh} = await useFetch(runtimeConfig.public.carsApi, {
  method: "GET",
  headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'},
  query: {
    page: 1,
  }
})

watchEffect(() => {
  if (res?.value?.data) {
    setList(res.value.data, 'RECOMMENDED')
  }
})

</script>

<template>
  <section class="flex flex-col">
    <h2 class="text-secondary-300 text-base font-semibold mb-6">Recommendation Car</h2>
    <span v-if="pending">
      LOADING...
    </span>
    <client-only>
      <car-list class="mb-8" v-if="(res?.data?.length || recommendedList) && !pending" :cars="recommendedList"
                list-type="RECOMMENDED"/>
    </client-only>
    <p v-if="!res?.data?.length && !pending">No Cars found</p>
    <p v-if="error">
      <base-button @click="refresh()" class="mx-auto" content="Retry"/>
      {{ error }}
    </p>
    <base-button v-if="showMoreBtn" class="mx-auto" content="Show more car"/>
  </section>
</template>

<style scoped lang="postcss">

</style>