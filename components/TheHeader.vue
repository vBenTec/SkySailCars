<script setup lang="ts">
import BaseSearch from "@/components/library/forms/BaseSearch.vue";
</script>

<template>
  <header>
    <base-logo/>
    <base-search placeholder="Search something here"/>
  </header>
</template>

<style scoped lang="postcss">
header {
  @apply bg-white border-default panel-spacing;
}
</style>