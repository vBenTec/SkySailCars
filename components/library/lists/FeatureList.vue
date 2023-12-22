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
  <div class="list-container" role="listbox">
    <dl class="flex gap-1 items-center overflow-x-clip truncate" v-for="item in list">
      <dt class="order-1 flex">
        {{ item.label }}
      </dt>
      <dd>
        <base-icon v-if="item.icon" size="normal" :icon="item.icon"/>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="postcss">
.list-container {
  @apply max-w-full flex gap-4 flex-wrap text-secondary-300;
}
</style>