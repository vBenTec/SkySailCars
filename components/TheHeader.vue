<script setup lang="ts">
import BaseSearch from "@/components/library/forms/BaseSearch.vue";
import BaseIcon from "@/components/BaseIcon.vue";

// ************* FUNCTIONS | METHODS ************* //

const handleSearch = (value) => {
  console.log(value)
}
</script>

<template>
  <header>
    <base-logo/>
    <base-search @handle:search="handleSearch" placeholder="Search something here"/>
    <base-icon tag="button" styling="circleNeutral" icon="heart-outline"/>
  </header>
</template>

<style scoped lang="postcss">
header {
  @apply flex items-center justify-between bg-white border-default panel-spacing;
}
</style>