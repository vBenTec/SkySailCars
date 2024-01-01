<script setup lang="ts">
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
import CarDetail from "@/components/cars/CarDetail.vue";
import CarSearchResults from "@/components/cars/CarSearchResults.vue";
</script>

<template>
  <div class=" px-4 lg:px-16 py-8">
    <car-detail class="mb-8  mx-auto"/>
    <car-search-results/>
    <recommended-cars :show-more-btn="false"/>
  </div>
</template>

<style scoped lang="postcss">

</style>