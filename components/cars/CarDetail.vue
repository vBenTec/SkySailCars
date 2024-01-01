<script setup lang="ts">
import ImageGallery from "@/components/library/ImageGallery.vue";

const route = useRoute()

const {pending, data, error} = await useFetch(`/api/carDetail/${route.params.id}`, {
  method: "GET",
  headers: {"Content-Type": "application/json", 'Access-Control-Allow-Origin': '*'},
})
</script>

<template>
  <div>
    <div v-if="pending">...Loading</div>
    <div class="flex flex-col lg:flex-row gap-8" v-else-if="!pending && data">
      <image-gallery class="xl:basis-1/3 lg:max-w-lg xl:min-w-[30rem]" :item="data"/>
      <product-detail class="flex-grow" :product="data"/>
    </div>
    <p v-else-if="!pending && !data">No result</p>
    <div v-if="error">
      <pre>{{ error }}</pre>
    </div>
  </div>
</template>

<style scoped lang="postcss">
:deep(.list-container) {
  @apply gap-8
}

:deep(.list-container__item) {
  @apply gap-8
}
</style>