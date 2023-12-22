<script setup lang="ts">
import FeatureList from "@/components/library/lists/FeatureList.vue";
import type {Car} from "@/models/api/car.ts";
import {useCarStore, ListTypes} from "@/stores/carStore";
// ************* TYPES ************* //

// ************* EMITS ************* //
defineEmits<{
  'handle:favorite': [Car]
}>()

interface Props {
  cars: Car[];
  listType: ListTypes
  boxing?: 'scroll-box'
}

const {handleFavorite} = useCarStore()
// ************* PROPS ************* //
defineProps<Props>()

// ************* FUNCTIONS | METHODS ************* //
const getPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)
}

const getFeatureList = (car: Car) => {
  // no reactivity needed if translation would be required computed property
  return [
    {label: car.gasolineLiter + 'L', icon: 'gas-station'},
    {label: car.kindOfTransition, icon: 'steering-wheel'},
    {label: car.people + ' People', icon: 'profile-2-user'},
  ]
}
</script>

<template>
  <ul class="list" :class="{'list--scroll-box':boxing === 'scroll-box'}">
    <base-card class="flex flex-col" v-for="car in cars" :key="car.id" tag="li">
      <header class="flex justify-between">
        <nuxt-link :to="{name: 'car-id', params: {id: car.id}}">
          <h3 class="text-secondary-500 text-lg font-bold">{{ car.name }}</h3>
          <h4 class="text-secondary-300 text-sm font-bold">{{ car.type }}</h4>
        </nuxt-link>
        <base-icon tag="button" @click="handleFavorite(car, listType)" size="small"
                   :icon="!car.liked?'heart-outline': 'heart-solid'"
                   class="text-primary-500 mt-1"/>
      </header>
      <section class="mb-5">
        <nuxt-link :to="{name: 'car-id', params: {id: car.id}}" class="img-wrapper">
          <nuxt-img class="scale-[150%]" :src="car.img" :alt="car.name" width="100" height="100"/>
        </nuxt-link>
        <div>
          <feature-list class="justify-between mx-auto max-w-[20rem]" :list="getFeatureList(car)"/>
        </div>
      </section>
      <footer class="flex justify-between items-center mt-auto">
        <div class="text-secondary-500 text-base font-bold"><span>{{ getPrice(car.pricePerDay) }}</span> / <span
            class="text-secondary-300 text-sm">day</span></div>
        <base-button content="Rent Now"/>
      </footer>
    </base-card>
  </ul>
</template>

<style scoped lang="postcss">

.list {
  @apply grid xl:grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2;

  &--scroll-box {
    @apply flex overflow-x-auto;

    > * {
      @apply min-w-fit max-w-md;
    }
  }
}

.img-wrapper {
  @apply relative h-32 w-full flex justify-center items-center;

  /* Foreground gradient over the car image */

  &::before {
    content: '';
    @apply w-full h-1/2 absolute gradient-whit-to-t z-10 left-0 right-0 bottom-0;
  }

}
</style>