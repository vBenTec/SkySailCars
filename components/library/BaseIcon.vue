<script setup lang="ts">
import sprite from '@/assets/icons/sprite.svg';

interface Props {
  icon: string;
  size?: 'small' | 'normal' | 'large';
  styling?: 'error-500' | 'circleNeutral' | 'none';
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
      class="icon-container styling"
      :class="[
      {
        small: 'size size--small',
        normal: 'size size--normal',
        large: 'size size--large',
        xLarge: 'size size--xLarge',
      }[size],
      {
        none: '',
        circleNeutral: 'styling--circle-neutral',
        'error-500': 'styling--error-500',
      }[styling],
    ]"
  >
    <svg class="icon-container__icon">
      <use v-bind="svgIcon"/>
    </svg>
  </component>
</template>

<style scoped lang="postcss">
.icon-container {
  @apply flex items-center justify-center;

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

  &.styling {
    &--circle-neutral {
      @apply p-2 border text-secondary-400 border-grey-400 w-10 h-10 rounded-full;
    }
    &--error-500 {
      @apply text-error-500
    }
  }
}

</style>
