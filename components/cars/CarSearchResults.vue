<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import {useCarStore} from "@/stores/carStore.ts";

// Can be loaded async since it is not rendered initially
// We could also write build in Lazy prefix to make iy async component
const CarList = defineAsyncComponent(() => import('@/components/cars/CarList.vue'))

// ************* TYPES ************* //
interface Props {
  showMoreBtn?: boolean;
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  showMoreBtn: true
})
// ************* COMPOSABLES ************* //
const runtimeConfig = useRuntimeConfig()

// ************* STORES ************* //
const carStore = useCarStore()
const {searchResults} = storeToRefs(carStore) //  should be ref by default :TODO check why loses reactivity
const {isFetching} = carStore

</script>

<template>
  <transition name="fade" appear>
    <section class="flex flex-col" v-if="searchResults !== undefined || isFetching.search">
      <h2 class="text-secondary-300 text-base font-semibold mb-6">Search Results</h2>
      <p v-if="searchResults?.length === 0">No results found!</p>
      <loading-spinner v-if="isFetching.search"/>
      <car-list v-if="!isFetching.search" class="mb-8" :cars="searchResults" list-type="SEARCH"/>
      <p v-else-if="!searchResults?.length && !isFetching.search">No Cars found</p>
      <base-button class="mx-auto" content="Show more car"/>
    </section>
  </transition>
</template>

<style scoped lang="postcss">

</style>