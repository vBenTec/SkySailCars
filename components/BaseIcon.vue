<script setup lang="ts">
import sprite from '@/assets/icons/sprite.svg';

interface Props {
  icon: string;
  size?: 'small' | 'normal' | 'large';
  styling?: 'primary' | 'secondary' | 'tertiary' | 'none';
  tag?: 'div' | 'span' | 'button';
}

const props = withDefaults(defineProps<Props>(), {
  size: 'small',
  styling: 'none',
  useHover: false,
  tag: 'span',
});

const svgIcon = computed(() => {
  return {
    'xlink:href': sprite + '#' + props.icon,
  };
});
</script>

<template>
  <component
      :is="tag"
      class="icon-container"
      :class="[
      {
        small: 'size size--small',
        normal: 'size size--normal',
        large: 'size size--large',
        xLarge: 'size size--xLarge',
      }[size],
    ]"
  >
    <svg class="icon-container__icon">
      <use v-bind="svgIcon"/>
    </svg>
  </component>
</template>

<style scoped lang="postcss">
.icon-container {
  @apply inline-block;

  svg {
    @apply w-full h-full
  }

  &.size {
    &--small {
      @apply h-4 w-4;
    }

    &--normal {
      @apply h-6 w-6;
    }

    &--large {
      @apply h-8 w-8;
    }
  }
}

</style>
