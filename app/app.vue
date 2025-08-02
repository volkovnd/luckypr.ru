<template>
  <div id="wrapper">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({ titleTemplate: title => (title ? `${title} | ` : '') + 'Интернет-студия LuckyPR' })
</script>

<style lang="scss">
body {
  font-family: $base-font-family;
}
</style>
