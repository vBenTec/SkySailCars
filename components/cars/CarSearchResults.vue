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
    <section class="flex flex-col" v-if="searchResults !== undefined">
      <h2 class="text-secondary-300 text-base font-semibold mb-6">Search Results</h2>
      <p v-if="searchResults?.length === 0">No results found!</p>
      <!--    <span v-if="pending">-->
      <!--  :Implement search through API 🤖  -->
      <!--      LOADING...-->
      <!--    </span>-->
      <client-only>
        <car-list class="mb-8" :cars="searchResults" list-type="SEARCH"/>
      </client-only>
      <!--    <p v-else-if="!recommendedList.length">No Cars found</p>-->
      <!--    <p v-if="error">-->
      <!--      <base-button @click="refresh()" class="mx-auto" content="Retry"/>-->
      <!--      {{ error }}-->
      <!--    </p>-->
      <!--    <base-button v-if="showMoreBtn" class="mx-auto" content="Show more cars"/>-->
    </section>
  </transition>
</template>

<style scoped lang="postcss">

</style>