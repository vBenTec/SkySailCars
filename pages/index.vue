<template>
  <div class="mb-8">
    <main-feed class="mb-6"/>
    <popular-feed class="mb-8"/>
    <recommended-cars/>
  </div>
</template>

<script setup lang="ts">
import MainFeed from "@/components/feeds/MainFeed.vue";
import PopularFeed from "@/components/cars/PopularCars.vue";
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
</script>

<style lang="postcss" scoped>
div {
  @apply mx-auto px-8 py-4;
}
</style>