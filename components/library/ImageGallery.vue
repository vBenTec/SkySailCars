<script setup lang="ts" generic="T">
import FeaturedCard from "@/components/library/FeaturedCard.vue";
// ************* TYPES ************* //
import {computed} from "vue";

interface Props {
  item: T
}

// ************* PROPS ************* //
const props = defineProps<Props>()

defineOptions({
  components: {
    FeaturedCard
  },
})

// ************* GETTERS ************* //
const images = computed(() => {
  return [{
    component: 'featured-card',
    attrs: {variant: 'tertiary', img: {src: props.item.img, alt: 'img'}}
  }, ...props.item.images]
})
</script>
<template>
  <figure>
    <div>
      <slot>
        <featured-card class="feature-card" v-if="item" variant="tertiary" :img="{src: item.img, alt: 'car image'}"
                       title="Sports car with the best design and acceleration" description="Safety and comfort while driving a
futuristic and elegant sports car"/>
      </slot>
    </div>
    <ul v-if="item">
      <li class="max-w-[9.25rem] max-h-[8.25rem] overflow-clip rounded-lg" v-for="(img, index) in images"
          :key="index">
        <component v-if="img?.component" :is="img.component" v-bind="img?.attrs? img.attrs: {}"
                   class="flex items-center justify-center"/>
        <nuxt-img v-else class="w-full h-full block object-cover" :src="img.url" :alt="img.alt"/>
      </li>
    </ul>
  </figure>
</template>

<style scoped lang="postcss">
figure {
  @apply flex flex-col gap-4;
}

.feature-card {
  :deep(h4) {
    @apply text-[2rem]
  }
}

ul {
  @apply flex overflow-x-auto gap-4;
}
</style>