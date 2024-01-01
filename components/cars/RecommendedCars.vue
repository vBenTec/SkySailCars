<script setup lang="ts">
import CarList from "@/components/cars/CarList.vue";
import {ListTypes, useCarStore} from "@/stores/carStore.ts";
import {storeToRefs} from "pinia";

// ************* TYPES ************* //
interface Props {
  showMoreBtn?: boolean;
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  showMoreBtn: true
})

const isFetchingMoreCars = ref(false)

// ************* STORES ************* //
const carStore = useCarStore()
const {recommendedMeta, setList, setMeta, incrementPageCount} = carStore
const {recommendedList} = storeToRefs(carStore)

const {data: res, pending, error, refresh} = await useFetch('/api/cars/all', {
  method: "GET",
  query: {
    page: recommendedMeta.currentPage,
  }
})

watchEffect(() => {
  if (res?.value?.data && recommendedMeta.currentPage === 1) {
    setList(res.value.data, ListTypes.RECOMMENDED)
    setMeta(res.value.meta, ListTypes.RECOMMENDED)
  }
})

// ************* FUNCTIONS | METHODS ************* //
const handleShowMoreCars = async () => {
  try {
    isFetchingMoreCars.value = true
    incrementPageCount(recommendedMeta.currentPage + 1, ListTypes.RECOMMENDED)
    const res = await $fetch('/api/cars/all', {
      query: {
        page: recommendedMeta.currentPage,
      }
    })
    setList(res.data, ListTypes.RECOMMENDED, true)
  } catch (e) {
    // :TODO handle error
    console.error(e)
  } finally {
    isFetchingMoreCars.value = false
  }
}

</script>

<template>
  <section class="flex flex-col">
    <h2 class="text-secondary-300 text-base font-semibold mb-6">Recommendation Car</h2>
    <loading-spinner v-if="pending"/>
    <client-only>
      <car-list class="mb-8" v-if="(res?.data?.length || recommendedList) && !pending" :cars="recommendedList"
                list-type="RECOMMENDED"/>
    </client-only>
    <loading-spinner v-if="isFetchingMoreCars"/>
    <p v-if="!res?.data?.length && !pending">No Cars found</p>
    <p v-if="error">
      <base-button @click="refresh()" class="mx-auto" content="Retry"/>
      {{ error }}
    </p>
    <transition name="fade">
      <base-button v-if="showMoreBtn && recommendedMeta.currentPage !== recommendedMeta.last_page"
                   :disabled="isFetchingMoreCars"
                   @click="handleShowMoreCars" class="mx-auto" content="Show more car"/>
    </transition>
  </section>
</template>

<style scoped lang="postcss">

</style>