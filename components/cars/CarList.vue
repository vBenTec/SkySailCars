<script setup lang="ts">

// ************* TYPES ************* //
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

const getIcons = () => {
  return [
    {},
    {},
    {}
  ]
}
</script>

<template>
  <ul class="grid xl:grid-cols-4 gap-8 lg:grid-cols-3 md:grid-cols-2">
    <base-card v-for="car in cars" :key="car.id" tag="li">
      <header class="flex justify-between">
        <div>
          <h3 class="text-secondary-500 text-lg font-bold">{{ car.name }}</h3>
          <h4 class="text-secondary-300 text-sm font-bold">{{ car.type }}</h4>
        </div>
        <base-icon size="small" icon="heart-outline" class="text-primary-500 mt-1"/>
      </header>
      <section>
        <div class="h-32 w-full flex justify-center items-center">
          <nuxt-img class="scale-[150%]" :src="car.img" :alt="car.name" width="100" height="100"/>
        </div>
        <div>
          <dl>
            <dt>
              <base-icon/>
            </dt>
            <dd></dd>
          </dl>
        </div>
      </section>
      <footer class="flex justify-between items-center">
        <div class="text-secondary-500 text-base font-bold"><span>{{ getPrice(car.pricePerDay) }}</span> / <span
            class="text-secondary-300 text-sm">day</span></div>
        <base-button content="Rent Now"/>
      </footer>
    </base-card>
  </ul>
</template>

<style scoped lang="postcss">

</style>