<script setup lang="ts">
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
import CarDetail from "@/components/cars/CarDetail.vue";
import CarSearchResults from "@/components/cars/CarSearchResults.vue";

const router = useRouter()

useHead({
  title:  'Sky Sail:' + router.currentRoute.value.params.id,
  meta: [
    {
      name: "description",
      content: `Sky Sail Cars - ${router.currentRoute.value.params.id} detail page `,
    },
  ],

})
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