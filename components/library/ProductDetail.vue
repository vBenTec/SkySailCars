<script setup lang="ts" generic="T">
// ************* TYPES ************* //
import BaseRating from "@/components/library/BaseRating.vue";
import FeatureList from "@/components/library/lists/FeatureList.vue";

interface Props {
  product: T
}

// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <dl>
    <dt>
      <h5>{{ product.name }}</h5>
      <base-rating review-count="440" :rating="4"/>
    </dt>
    <dd>
      <p>{{ product.description }}</p>
    </dd>
    <feature-list />
  </dl>
</template>

<style scoped lang="postcss">

</style>