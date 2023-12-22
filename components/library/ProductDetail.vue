<script setup lang="ts" generic="T">
// ************* TYPES ************* //
import BaseRating from "@/components/library/BaseRating.vue";
import FeatureList from "@/components/library/lists/FeatureList.vue";
import {useCarHelper} from "@/composables/useCarHelper.ts";
import {useCarStore} from "@/stores/carStore.ts";
import {storeToRefs} from "pinia";
import {computed} from "vue";

interface Props {
  product: T
}

const carStore = useCarStore()
const {recommendedList, favoriteRecommendedCars} = storeToRefs(carStore)

const isCurrentProductLiked = computed(() => {
  return recommendedList.value.some((car) => car.id === props.product.id) || recommendedList.value.some((car) => car.id === props.product.id)
})

const {getFeatureList} = useCarHelper()
// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <base-card class="flex flex-col gap-4">
    <header>
      <h5 class="text-secondary-500 text-[2rem] font-bold">{{ product.name }}</h5>
      <base-rating :review-count="440" :rating="4"/>
      <base-icon :icon="isCurrentProductLiked? 'heart-solid': 'heart-outline'"/>
    </header>
    <p class="text-secondary-400 leading-[200%] ">{{ product.description }}</p>
    <feature-list class="mb-auto" :list="getFeatureList(product, false)"/>
    <base-price class="justify-between" :price="product.pricePerDay"/>
  </base-card>
</template>

<style scoped lang="postcss">

</style>