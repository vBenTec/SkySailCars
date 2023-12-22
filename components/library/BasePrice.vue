<script setup lang="ts">

// ************* TYPES ************* //
interface Props {
  tag: 'div' | 'footer'
  price: number
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  tag: 'div'
})

const getPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(price)
}
</script>

<template>
  <component :is="tag">
    <div class="text-secondary-500 text-base font-bold"><span>{{ getPrice(price) }}</span> / <span
        class="text-secondary-300 text-sm">day</span></div>
    <slot name="action">
      <base-button content="Rent Now"/>
    </slot>
  </component>
</template>

<style scoped lang="postcss">

</style>