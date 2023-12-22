<script setup lang="ts">
import ImageGallery from "@/components/library/ImageGallery.vue";
import type {SpecificCar} from "@/models/api/car.ts";

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const {pending, data, error} = await useFetch(`${runtimeConfig.public.carsApi}/${route.params.id}`, {
  method: "GET",
  headers: {"Content-Type": "application/json"}
})
</script>

<template>
  <div class="">
    <div v-if="pending">...Loading</div>
    <div class="flex flex-col md:flex-row gap-8" v-else-if="!pending && data">
      <image-gallery class="max-w-lg" :item="data"/>
      <product-detail :product="data"/>
    </div>
    <p v-else-if="!pending && !data">No result</p>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<style scoped lang="postcss">

</style>