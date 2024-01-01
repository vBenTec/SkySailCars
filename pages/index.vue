<template>
  <div class="mb-8 max-w-full">
    <main-feed class="mb-6"/>
    <car-search-results ref="searchResultsInstance"/>
    <popular-feed class="mb-8"/>
    <recommended-cars/>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";
import MainFeed from "@/components/feeds/MainFeed.vue";
import PopularFeed from "@/components/cars/PopularCars.vue";
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
import CarSearchResults from "@/components/cars/CarSearchResults.vue";
import {useCarStore} from "@/stores/carStore.ts";

const searchResultsInstance = ref<InstanceType<typeof CarSearchResults>>();

const carStore = useCarStore()
const {searchResults} = storeToRefs(carStore)

watch(searchResults, (newList) => {
  if (newList) {
    searchResultsInstance.value?.$el?.scrollIntoView({
      behavior: 'smooth',
    });
  }
});

useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<style lang="postcss" scoped>
div {
  @apply mx-auto px-8 py-4;
}
</style>