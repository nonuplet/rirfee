<script setup lang="ts">
import IndexHeader from '../components/IndexHeader.vue'
import EyeCatch from '../components/EyeCatch.vue'
import IndexAbout from '../components/IndexAbout.vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { onMounted, onUnmounted } from 'vue'

const browser = useBrowserStore()

onMounted(() => {
  document.addEventListener('resize', browser.onResize)
})

onUnmounted(() => {
  document.removeEventListener('resize', browser.onResize)
})
</script>

<template>
  <div id="index">
    <IndexHeader />
    <EyeCatch />
    <IndexAbout />
  </div>
</template>

<style scoped lang="sass">
#index
  @apply min-h-[3000px]
</style>
