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
  <base-card :class="{'primary': 'variant--primary', 'variant--secondary': ''}[variant]">
    <header>{{ title }}</header>
    <section>{{ description }}</section>
    <footer>
      <base-button :content="btnText"/>
      <nuxt-img :src="img.src" :alt="img.alt"/>
    </footer>
  </base-card>
</template>

<style scoped lang="postcss">
.variant {
  &--primary {
    @apply bg-primary-500;
  }

  &--secondary {
    @apply bg-secondary-500;
  }
}
</style>