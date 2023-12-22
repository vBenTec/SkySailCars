<script setup lang="ts">
// ************* TYPES ************* //
interface Props {
  rating: number
  starCount?: number
  reviewCount?: number
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  starCount: 5
})
</script>

<template>
  <ul class="flex items-center gap-1">
    <li class="text-base" v-for="count in starCount" :key="count">
      <base-icon :icon="count <= rating? 'star' : 'star-outline'" class="text-yellow-400"/>
    </li>
    <li v-if="reviewCount" class="text-secondary-400 font-medium text-[0.875rem]">{{ reviewCount }}+ Reviewer</li>
  </ul>
</template>

<style scoped lang="postcss">

</style>