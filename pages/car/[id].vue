<script setup lang="ts">
import RecommendedCars from "@/components/cars/RecommendedCars.vue";
import CarDetail from "@/components/cars/CarDetail.vue";
import CarSearchResults from "@/components/cars/CarSearchResults.vue";
import {ref, watch} from "vue";
import {useCarStore} from "@/stores/carStore.ts";

const router = useRouter()

useHead({
  title: 'Sky Sail:' + router.currentRoute.value.params.id,
  meta: [
    {
      name: "description",
      content: `Sky Sail Cars - ${router.currentRoute.value.params.id} detail page `,
    },
  ],

})

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
</script>

<template>
  <div class=" px-4 lg:px-16 py-8">
    <car-detail class="mb-8  mx-auto"/>
    <car-search-results ref="searchResultsInstance"/>
    <recommended-cars :show-more-btn="false"/>
  </div>
</template>