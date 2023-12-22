<script setup lang="ts">
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
import CarDetail from "@/components/cars/CarDetail.vue";

definePageMeta({
  middleware: ['car-details']
})
</script>

<template>
  <div>
    <p>Car</p>
    <car-detail/>
    <recommended-cars :show-more-btn="false"/>
  </div>
</template>

<style scoped lang="postcss">

</style>