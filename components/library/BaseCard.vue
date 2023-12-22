<template>
  <component :is="tag" class="card">
    <slot/>
  </component>
</template>
<script setup lang="ts">
interface Props {
  tag?: string;
}

withDefaults(defineProps<Props>(), {
  tag: 'div'
})
</script>

<style scoped lang="postcss">
.card {
  @apply p-4 h-full w-full rounded-lg bg-white;
}
</style>
