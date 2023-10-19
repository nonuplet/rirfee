<script setup lang="ts">
import IndexHeader from '../components/IndexHeader.vue'
import EyeCatch from '../components/EyeCatch.vue'
import IndexAbout from '../components/IndexAbout.vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { onMounted, onUnmounted } from 'vue'
import IndexProducts from '../components/IndexProducts.vue'

const browser = useBrowserStore()

onMounted(() => {
  browser.onResize()
  window.addEventListener('resize', browser.onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', browser.onResize)
})
</script>

<template>
  <div id="index">
    <IndexHeader />
    <EyeCatch />
    <IndexAbout />
    <IndexProducts />
    <div class="w-full h-[100vh]">
      <span>これはテスト 次のセクション</span>
    </div>
  </div>
</template>

<style scoped lang="sass">
#index
  @apply min-h-[3000px]
</style>
