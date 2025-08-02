<template>
  <div id="main">
    <div class="message">
      В данный момент сайт обновляется!
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({ title: 'Главная' })
</script>

<style lang="scss">
#main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.message {
  font-size: 2rem;
  font-weight: 500;
}
</style>
