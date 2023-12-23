<template>
  <div class="theme-default">
    <the-header/>
    <slot/>
    <the-footer class="order-2"/>
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style lang="postcss" scoped>
div{
  @apply flex flex-col;
}
</style>