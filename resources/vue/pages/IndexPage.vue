<script setup lang="ts">
import IndexHeader from '../components/IndexHeader.vue'
import EyeCatch from '../components/EyeCatch.vue'
import IndexAbout from '../components/IndexAbout.vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
import IndexProducts from '../components/IndexProducts.vue'
import IndexPosts from '../components/IndexPosts.vue'
import { useBlogStore, PostProp } from '../../ts/stores/BlogStore'

const browser = useBrowserStore()
const blog = useBlogStore()

const props = defineProps<{
  recent: PostProp[]
}>()

onBeforeMount(() => {
  blog.addRecent(props.recent)
})

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
    <IndexPosts />
  </div>
</template>

<style scoped lang="sass">
#index
  @apply min-h-[3000px]
</style>
