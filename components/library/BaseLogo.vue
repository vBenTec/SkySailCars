<script lang="ts" setup>
// :TODO write it as a render function and add sizes

// ************* TYPES ************* //
interface Props {
  size?: 'small' | 'normal';
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  size: 'normal'
})
</script>

<template>
  <div :class="[{small: 'size--small', normal: 'size--normal'}[size] ,'inline-block size']">
    <nuxt-img src="/images/sky_cars_logo.png" class="w-full h-full" alt="Logo"/>
  </div>
</template>

<style scoped lang="postcss">
.size {
  &--small {
    @apply h-6;
  }

  &--normal {
    @apply h-[2.5rem];
  }
}
</style>