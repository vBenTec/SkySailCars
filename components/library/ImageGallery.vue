<script setup lang="ts">

// ************* TYPES ************* //
interface Props {
  imgs: { url: string }[]
}

// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <div>
    {{ imgs }}
  </div>
</template>

<style scoped lang="postcss">

</style>