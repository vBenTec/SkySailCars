<script setup lang="ts">
import {defineAsyncComponent} from "vue";
import {ListTypes, useCarStore} from "@/stores/carStore.ts";

// We could also write build in Lazy prefix to make it async component
const CarList = defineAsyncComponent(() => import('@/components/cars/CarList.vue'))

// ************* TYPES ************* //
interface Props {
  showMoreBtn?: boolean;
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  showMoreBtn: true
})
// ************* local STATE ************* //
const isFetchingMore = ref(false)

// ************* STORES ************* //
const carStore = useCarStore()
const {searchResults} = storeToRefs(carStore) //  should be ref by default :TODO check why loses reactivity
const {isFetching, searchMeta, search, incrementPageCount} = carStore

// ************* FUNCTIONS | METHODS ************* //
const handleMoreSearchResults = async () => {
  try {
    isFetchingMore.value = true
    incrementPageCount(searchMeta.currentPage + 1, ListTypes.SEARCH)
    await search()
  } catch (e) {
    // :TODO handle error
    console.log(e)
  } finally {
    isFetchingMore.value = false
  }
}
</script>

<template>
  <transition name="fade" appear>
    <section class="flex flex-col" v-if="searchResults !== undefined || isFetching.search">
      <h2 class="text-secondary-300 text-base font-semibold mb-6">Search Results</h2>
      <loading-spinner v-if="isFetching.search"/>
      <car-list v-if="!isFetching.search" class="mb-8" :cars="searchResults" list-type="SEARCH"/>
      <loading-spinner v-if="isFetchingMore"/>
      <p v-else-if="!searchResults?.length && !isFetching.search">No Cars found</p>
      <base-button :disabled="isFetchingMore" @click="handleMoreSearchResults"
                   v-if="searchMeta.currentPage !== searchMeta.last_page && searchMeta.last_page > 1" class="mx-auto"
                   content="Show more car"/>
    </section>
  </transition>
</template>