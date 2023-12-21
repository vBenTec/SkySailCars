<script setup lang="ts">
const featuredCards = [
  {
    title: 'The Best Platform for Car Rental',
    description: 'Ease of doing a car rental safely and reliably. Of course at a low price.'

  },
  {
    title: 'Easy way to rent a car at a low price',
    description: 'Providing cheap car rental services and safe and comfortable facilities.'

  }
]
</script>

<template>
  <section>
    <featured-card v-for="card in featuredCards" v-bind="card"/>
  </section>
</template>

<style scoped lang="postcss">

</style>