<script setup lang="ts">
import BaseInput from "@/components/library/forms/BaseInput.vue";
import BaseIcon from "../../BaseIcon.vue";

const searchTerm = ref('')

watch(searchTerm, (value) => {
  console.log(value)
})

// ************* TYPES ************* //
interface Props {
  placeholder?: string;
}

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search something here'
})
</script>

<template>
  <div>
    <base-input v-model:model-value.lazy.trim="searchTerm" :placeholder="placeholder" type="search">
      <template #before>
        <base-icon icon="magnifying-glass" class="text-gray-400"/>
      </template>
    </base-input>
  </div>
</template>

<style scoped lang="postcss">

</style>