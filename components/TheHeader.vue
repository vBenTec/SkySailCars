<script setup lang="ts">
import BaseSearch from "@/components/library/forms/BaseSearch.vue";
import {useCarStore} from "../stores/carStore.ts";

// ************* STORES ************* //
const carStore = useCarStore()
const {setSearchTerm} = carStore
const {hasFavoriteList} = storeToRefs(carStore)

// ************* GETTERS ************* //
const icon = computed(() => !hasFavoriteList.value ? 'heart-outline' : 'heart-solid')
</script>

<template>
  <header class="header">
    <nuxt-link to="/" class="header__logo">
      <base-logo/>
    </nuxt-link>
    <base-search class="header__search" @handle:search="setSearchTerm" placeholder="Search something here"/>
    <div class="header__btn">
      <base-icon tag="button" styling="circleNeutral" :icon="icon"/>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.header {
  @apply grid grid-cols-2 gap-2 md:gap-0 md:flex md:items-center md:justify-between bg-white md:border-default panel-spacing;

  &__logo {
    @apply row-start-1 row-end-2 col-start-1 col-end-2 md:basis-[20%];
  }

  &__search {
    @apply row-start-2 col-span-2 md:flex-grow md:max-w-2xl;
  }

  &__btn {
    @apply row-start-1 row-end-2 col-start-2 col-end-3 md:basis-[20%] flex justify-end;
  }
}
</style>