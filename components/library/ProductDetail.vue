<script setup lang="ts" generic="T">
// ************* TYPES ************* //
import BaseRating from "@/components/library/BaseRating.vue";
import FeatureList from "@/components/library/lists/FeatureList.vue";
import {useCarHelper} from "@/composables/useCarHelper.ts";

interface Props {
  product: T
}

const {getFeatureList} = useCarHelper()
// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <base-card class="flex flex-col gap-4">
    <header>
      <h5 class="text-secondary-500 text-[2rem] font-bold">{{ product.name }}</h5>
      <base-rating review-count="440" :rating="4"/>
    </header>
    <p class="text-secondary-400 leading-[200%] ">{{ product.description }}</p>

    <feature-list :list="getFeatureList(product, false)"/>
  </base-card>
</template>

<style scoped lang="postcss">

</style>