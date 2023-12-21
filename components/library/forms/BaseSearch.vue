<script setup lang="ts">
import BaseInput from "@/components/library/forms/BaseInput.vue";

const searchTerm = ref('')

// ************* TYPES ************* //
interface Props {
  placeholder?: string;
}

// ************* EMITS ************* //
const emit = defineEmits<{
  'handle:search': [string]
}>()

// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Search something here'
})

// ************* COMPOSABLES ************* //
const debouncedSearchTerm = useDebounce(searchTerm, 500)

// ************* WATCHERS ************* //
watch(debouncedSearchTerm, (value) => {
  emit('handle:search', value)
})
</script>

<template>
  <div>
    <base-input v-model:model-value.trim="searchTerm" :placeholder="placeholder" type="search">
      <template #before>
        <base-icon icon="magnifying-glass" class="text-gray-400"/>
      </template>
    </base-input>
  </div>
</template>

<style scoped lang="postcss">

</style>