<script setup lang="ts">
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
import CarDetail from "@/components/cars/CarDetail.vue";

definePageMeta({
  middleware: ['car-details']
})
</script>

<template>
  <div class=" px-4 lg:px-16 py-8">
    <car-detail class="mb-8 max-w-7xl mx-auto"/>
    <recommended-cars :show-more-btn="false"/>
  </div>
</template>

<style scoped lang="postcss">

</style>