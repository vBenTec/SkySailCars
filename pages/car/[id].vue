<script setup lang="ts">

// ************* TYPES ************* //
interface Props {
  id: string;
}

// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <div>
    {{ props}}
    <p>Car</p>
  </div>
</template>

<style scoped lang="postcss">

</style>