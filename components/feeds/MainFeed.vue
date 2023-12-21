<script setup lang="ts">
import {useBreakpoints, breakpointsTailwind} from "@vueuse/core";
import {onBeforeMount, onMounted} from "vue";

// ************* COMPOSABLES ************* //
const breakpoints = useBreakpoints(breakpointsTailwind)

// ************* GETTERS ************* //
const isTabletSize = ref(false);

const featuredCards = computed(() => {
  const featuredData = [
    {
      title: 'The Best Platform for Car Rental',
      description: 'Ease of doing a car rental safely and reliably. Of course at a low price.',
      btnText: 'Rental Car',
      img: {
        src: '/images/ccgt-car.png',
        alt: 'Image of a ccgt car'
      },
      variant: 'tertiary'
    },
    {
      title: 'Easy way to rent a car at a low price',
      description: 'Providing cheap car rental services and safe and comfortable facilities.',
      btnText: 'Rental Car',
      img: {
        src: '/images/porsche-car.png',
        alt: 'Image of a porsche car'
      },
      variant: 'primary'
    }
  ]
  return isTabletSize.value ? featuredData : featuredData.slice(0, 1)
})

watch(() => breakpoints.md.value, (isGreaterThanMobile) => {
  isTabletSize.value = isGreaterThanMobile
})

onBeforeMount(() => {
  nextTick(() => {
    isTabletSize.value = breakpoints.md.value
  })
})

</script>

<template>
  <section :class="{'grid grid-cols-2 gap-8': isTabletSize}">
    <featured-card v-for="card in featuredCards" tag="article" v-bind="card"/>
  </section>
</template>

<style scoped lang="postcss">

</style>