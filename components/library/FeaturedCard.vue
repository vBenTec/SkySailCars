<script setup lang="ts">
// ************* TYPES ************* //
interface Props {
  title: string;
  description: string;
  btnText: string;
  img: {
    src: string;
    alt: string;
  }
  variant?: 'primary' | 'secondary';
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})
</script>

<template>
  <base-card class="text-white"
             :class="{'primary': 'variant--primary', 'tertiary': 'variant--tertiary'}[variant]">
    <h4 class="text-base font-semibold md:text-[2.1rem] leading-[150%] max-w-[20rem] mb-4">{{ title }}</h4>
    <p class="text-sm font-medium leading-[150%] md:text-base max-w-[20rem] mb-8">{{ description }}</p>
    <div class="flex gap-4 flex-col xl:flex-row">
      <base-button class="shrink-0 md:shrink max-w-fit" :content="btnText"/>
      <nuxt-img v-if="img" :src="img.src" :alt="img.alt"/>
    </div>
  </base-card>
</template>

<style scoped lang="postcss">
.variant {
  &--primary {
    @apply bg-[url('/images/bg-arrows.png')];
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &--tertiary {
    @apply bg-[url('/images/bg-circles.png')];
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>