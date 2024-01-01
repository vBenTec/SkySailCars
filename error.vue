<script lang="ts" setup>
// ************* TYPES ************* //
interface Props {
  error: {
    statusCode: number;
    message: string;
  };
}

// ************* PROPS ************* //
const props = defineProps<Props>()
</script>

<template>
  <div>
    <pre>
      {{ error }}
    </pre>

    <p>Sorry there is nothing here</p>
  </div>
</template>

<style scoped lang="postcss">

</style>