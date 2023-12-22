<script setup lang="ts" generic="T">

// ************* TYPES ************* //
interface Props {
  item: T
}

// ************* PROPS ************* //
const props = defineProps<Props>()
</script>
<template>
  <figure>
    <div>
      <slot>
        <featured-card v-if="item" variant="tertiary" :img="item.img"
                       title="Sports car with the best design and acceleration" description="Safety and comfort while driving a
futuristic and elegant sports car"/>
      </slot>
    </div>
    <ul v-if="item">
      <li class="max-w-[9.25rem] max-h-[8.25rem] overflow-clip rounded-lg" v-for="img in item.images">
        <nuxt-img class="w-full h-full block object-cover" :src="img.url" alt="image"/>
      </li>
    </ul>
  </figure>
</template>

<style scoped lang="postcss">
figure {
  @apply flex flex-col gap-4;
}

ul {
  @apply flex overflow-x-auto gap-4;
}
</style>