<script setup lang="ts" generic="T extends Item">
import type {Image} from '@/models/api/car.ts'

interface Item {
  images: Image[]
  img: string
}

interface ImgItem {
  /* component has to be defined in component options look at */
  component?: string
  attrs?: Record<string, unknown>
  url: string,
  alt: string
}

import FeaturedCard from "@/components/library/FeaturedCard.vue";
// ************* TYPES ************* //
import {computed} from "vue";

interface Props {
  item: T
}

// ************* PROPS ************* //
const props = defineProps<Props>()

// ************* OPTIONS ************* //
defineOptions({
  components: {
    FeaturedCard
  },
})


// ************* GETTERS ************* //
const imageList = computed<ImgItem[]>(() => {
  return [{
    component: 'featured-card',
    attrs: {variant: 'tertiary', img: {src: props.item.img, alt: 'img'}}
  }, ...props.item.images]
})

// ************* local STATE ************* //
const activeImageIndex = ref(0) // defaults to first image

// ************* FUNCTIONS | METHODS ************* //
const handleImageSelection = (index: number) => {
  activeImageIndex.value = index
}
</script>
<template>
  <figure>
    <!--    <figcaption/>-->
    <div>
      <slot>
        <featured-card class="feature-card" v-if="item" variant="tertiary" :img="{src: item.img, alt: 'car image'}"
                       title="Sports car with the best design and acceleration" description="Safety and comfort while driving a
futuristic and elegant sports car"/>
      </slot>
    </div>
    <ul v-if="item">
      <li class="img-item"
          :class="{'img-item--active': activeImageIndex === index}" v-for="(data, index) in imageList"
          :key="index" @click="handleImageSelection(index)">
        <component v-if="data.component" :is="data.component" v-bind="data.attrs? data.attrs: {}"
                   class="flex items-center aspect-video justify-center"/>
        <nuxt-img v-else class="w-full h-full block object-cover" :src="data.url" :alt="data.alt"/>
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

  .img-item {
    @apply max-w-[9.25rem] max-h-[8.25rem] overflow-clip rounded-lg;

    &--active {
      @apply border
    }
  }
}
</style>