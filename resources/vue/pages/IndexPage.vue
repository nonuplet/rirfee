<script setup lang="ts">
import IndexHeader from '../components/IndexHeader.vue'
import EyeCatch from '../components/EyeCatch.vue'
import IndexAbout from '../components/IndexAbout.vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { onBeforeMount, onMounted, onUnmounted } from 'vue'
import IndexProducts from '../components/IndexProducts.vue'
import { useBlogStore, PostProp } from '../../ts/stores/BlogStore'
import IndexRecent from '../components/IndexRecent.vue'
import IndexLinks from '../components/IndexLinks.vue'
import IndexFooter from '../components/IndexFooter.vue'
import IndexNews from '../components/IndexNews.vue'
import { NewsProp, useNewsStore } from '../../ts/stores/NewsStore'

const browserStore = useBrowserStore()
const blogStore = useBlogStore()
const newsStore = useNewsStore()

const props = defineProps<{
  recent: PostProp[]
  news: NewsProp[]
}>()

onBeforeMount(() => {
  if (props.recent !== null) blogStore.addRecent(props.recent)
  if (props.news !== null) newsStore.addNews(props.news)
})

onMounted(() => {
  browserStore.onResize()
  window.addEventListener('resize', browserStore.onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', browserStore.onResize)
})
</script>

<template>
  <div id="index">
    <IndexHeader />
    <EyeCatch />
    <IndexAbout />
    <IndexProducts />
    <IndexNews />
    <IndexRecent />
    <IndexLinks />
    <IndexFooter />
  </div>
</template>

<style scoped lang="sass">
#index
  @apply overflow-x-hidden
</style>
