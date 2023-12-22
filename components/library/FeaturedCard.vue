<script setup lang="ts">
// ************* TYPES ************* //
interface Props {
  title: string;
  description: string;
  btnText?: string;
  img?: {
    src: string;
    alt: string;
  }
  variant?: 'primary' | 'secondary';
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary'
})

// ************* GETTERS ************* //
const btnStyling = computed(() => {
  return props.variant === 'primary' ? 'tertiary' : 'primary'
})
</script>

<template>
  <base-card class="text-white"
             :class="{'primary': 'variant--primary', 'tertiary': 'variant--tertiary'}[variant]">
    <h4 class="text-base font-semibold md:text-[2.1rem] leading-[150%] max-w-[20rem] mb-4">{{ title }}</h4>
    <p class="text-sm font-medium leading-[150%] md:text-base max-w-[20rem] mb-8">{{ description }}</p>
    <div class="flex gap-4 flex-col xl:flex-row">
      <!--    Primary color has the BG  -->
      <base-button v-if="btnText" :styling="btnStyling" class="shrink-0 md:shrink max-w-fit"
                   :content="btnText"/>
      <div>
        <nuxt-img class="w-fulll h-full object-cover" v-if="img?.src" :src="img.src" :alt="img.alt"/>
      </div>
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