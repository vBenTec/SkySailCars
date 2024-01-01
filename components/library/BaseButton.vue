<template>
  <button
      :type="type"
      :disabled="disabled"
      :class="[
        'btn',
        'styling',
        'styling--' + styling,
        'size--' + size,
      ]"
  >
    {{ content }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  type?: 'submit' | 'button' | 'reset';
  content?: string;
  styling?:
      | 'primary'
      | 'tertiary'
      | 'none';
  disabled?: boolean;
  size?: 'smallest' | 'small' | 'normal' | 'large' | 'content';
}

const props = withDefaults(defineProps<Props>(), {
  styling: 'primary',
  type: 'button',
  size: 'normal',
});
</script>

<style scoped lang="postcss">
.btn,
.btn:link,
.btn:visited {
  @apply inline-block text-lg cursor-pointer font-semibold shrink-0;
}

.btn:disabled {
  @apply cursor-not-allowed opacity-50;
}

/* SIZE */
.size {
  &--normal {
    @apply text-base;
  }
}

/* Styling */
.styling {
  @apply h-[2.75rem] px-4 rounded-lg;

  &--primary {
    @apply bg-primary text-white;
  }

  &--tertiary {
    @apply bg-tertiary-info text-white;
  }
}
</style>
