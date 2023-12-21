<script setup lang="ts">
// ************* TYPES ************* //
type Value = string | number

interface Props {
  type?: 'text' | 'email' | 'password' | 'search'
  modelValue?: Value
  modelValueModifiers?: {
    lazy: string
    trim: string
  }
  disabled?: boolean
  readOnly?: boolean
  placeholder?: string
  options?: {
    autocomplete: 'current-password' | 'new-password' | 'useremail' | 'username' | 'email' | 'off'
  }
  id?: string
  error?: string[]
}


// ************* PROPS ************* //
const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  id: Math.ceil(Math.random() * 0.1).toString()
})

// ************* EMITS ************* //
const emit = defineEmits<{
  'update:modelValue': [Value]
}>()

// ************* FUNCTIONS | METHODS ************* //
function updateModelValue(event: Event) {
  if (props.modelValueModifiers?.trim) {
    (event.target as HTMLInputElement).value.trim()
  }

  if (event.type === 'change' && props.modelValueModifiers?.lazy) {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }

  if(event.type === 'input' && !props.modelValueModifiers?.lazy){
    emit('update:modelValue', (event.target as HTMLInputElement).value)
  }
}
</script>

<template>
  <div class="input-wrapper">
    <slot name="before"/>
    <input :type="type" :id="id"
           :disabled="disabled"
           :placeholder="placeholder"
           v-on="{
             input: updateModelValue,
             change: updateModelValue
           }"
           :readonly="readOnly" :value="modelValue" :autocomplete="options?.autocomplete">
    <slot name="after"></slot>
  </div>
</template>

<style scoped lang="postcss">
.input-wrapper {
  @apply py-2 px-4 flex items-center border-grey-400 gap-4 rounded-3xl  border-default transition-all;

  &:focus-within {
    @apply shadow-focus;
  }

  input {
    @apply text-sm outline-0 text-secondary-500 flex-grow;

    &::placeholder {
      @apply text-secondary-400
    }
  }
}
</style>