<template>
  <div>
    <MainFeed/>
    <PopularFeed/>
  </div>
</template>

<script setup lang="ts">

import MainFeed from "@/components/feeds/MainFeed.vue";
import PopularFeed from "@/components/cars/PopularCars.vue";
</script>

<style lang="postcss" scoped>
div {
  @apply mx-auto px-8 py-4;
}
</style>