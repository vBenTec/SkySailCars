<template>
  <div class="theme-default">
    <the-header/>
    <slot/>
<!--    <the-footer/>-->
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<style lang="scss" scoped>

</style>