<script setup lang="ts">

// ************* TYPES ************* //
import FeatureList from "../library/lists/FeatureList.vue";

interface Car {
  name: string;
  type: string;
  gasolineLiter: number;
  kindOfTransition: string;
  people: number;
  pricePerDay: number;
  id: number;
  img: string;
}

interface Props {
  cars: Car[];
}

// ************* PROPS ************* //
const props = defineProps<Props>()

// ************* FUNCTIONS | METHODS ************* //
const getPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)
}

const getFeatureList = (car: Car) => {
  // no reactivity needed if translation would be required computed property
  return [
    {title: car.gasolineLiter + 'L', icon: 'gas-station'},
    {title: car.kindOfTransition, icon: 'steering-wheel'},
    {title: car.people + ' People', icon: 'profile-2-user'},
  ]
}
</script>

<template>
  <ul class="grid xl:grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2">
    <base-card class="flex flex-col" v-for="car in cars" :key="car.id" tag="li">
      <header class="flex justify-between">
        <nuxt-link :to="{name: 'car-id', params: {id: car.id}}">
          <h3 class="text-secondary-500 text-lg font-bold">{{ car.name }}</h3>
          <h4 class="text-secondary-300 text-sm font-bold">{{ car.type }}</h4>
        </nuxt-link>
        <base-icon size="small" icon="heart-outline" class="text-primary-500 mt-1"/>
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
.img-wrapper {
  @apply relative h-32 w-full flex justify-center items-center;

  /* Foreground gradient over the car image */

  &::before {
    content: '';
    @apply w-full h-1/2 absolute gradient-whit-to-t z-10 left-0 right-0 bottom-0;
  }

}
</style>