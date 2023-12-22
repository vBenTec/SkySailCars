<script setup lang="ts">
// ************* TYPES ************* //
interface Item {
  label: string;
  icon?: string;
  value?: string;
}

interface Props {
  list: Item[]
}

// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <ul class="list-container" role="listbox">
    <li class="list-container__item" v-for="item in list">
      <h6 v-if="item.label">{{ item.label }}</h6>
      <span class="order-1 flex" :class="{'text-secondary-400 font-medium':item.label}">
        {{ item.value }}
      </span>
      <div>
        <base-icon v-if="item.icon" size="normal" :icon="item.icon"/>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="postcss">
.list-container {
  @apply max-w-full flex gap-4 flex-wrap text-secondary-300;

  &__item {
    @apply flex gap-1 items-center overflow-x-clip truncate;
  }
}
</style>