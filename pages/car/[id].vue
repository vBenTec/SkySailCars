<script setup lang="ts">
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
import CarDetail from "@/components/cars/CarDetail.vue";
import CarSearchResults from "@/components/cars/CarSearchResults.vue";

definePageMeta({
  // add middleware to load before on before route update
  // if error occurs abortNavigation to different page
  middleware: ['car-details']
})
</script>

<template>
  <div class=" px-4 lg:px-16 py-8">
    <car-detail class="mb-8 max-w-7xl mx-auto"/>
    <client-only>
      <car-search-results/>
    </client-only>
    <recommended-cars :show-more-btn="false"/>
  </div>
</template>

<style scoped lang="postcss">

</style>