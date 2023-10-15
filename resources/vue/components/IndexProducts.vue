<script setup lang="ts">
import ScrollMagic from 'scrollmagic'
//import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import anime from 'animejs'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { storeToRefs } from 'pinia'

const browser = useBrowserStore()
const { width: windowWidth } = storeToRefs(browser)
watch(windowWidth, () => {
  changeScrollEvent()
})

const width = ref(0)
const controller = ref(new ScrollMagic.Controller())
const scene = ref(null)

const frame = ref(null)
const vBox = ref(null)

const startScrollEvent = () => {
  const offset = frame.value.clientHeight / 2
  width.value = vBox.value.scrollWidth - frame.value.clientWidth

  scene.value = new ScrollMagic.Scene({
    triggerElement: '#products',
    duration: width.value,
    offset: offset,
  })
    .addTo(controller.value)
    .setPin('#products')
  //    .addIndicators({ name: 'test' })
  scene.value.on('progress', onScrollEvent)
}

const changeScrollEvent = () => {
  const offset = frame.value.clientHeight / 2
  width.value = vBox.value.scrollWidth - frame.value.clientWidth
  scene.value.duration = width.value
  scene.value.offset = offset
}

const onScrollEvent = (event: ScrollMagic.ProgressEvent) => {
  vBox.value.scrollLeft = event.progress * width.value
}

onMounted(() => {
  frame.value = document.getElementById('products')
  vBox.value = document.getElementById('product-list')
  startScrollEvent()
})

onUnmounted(() => {
  controller.value.removeScene(scene.value)
  scene.value = null
})
</script>

<template>
  <section id="products">
    <h2 class="title">Products</h2>
    <div id="products-container">
      <div id="product-list">
        <div class="product"></div>
        <div class="product"></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
#products
  @apply w-full bg-primary py-10

  .title
    @apply block w-full font-inter font-black text-white text-center text-[2.5rem] py-8

  #products-container
    @apply w-full overflow-hidden py-2

    #product-list
      @apply flex gap-8 px-6 overflow-x-scroll
      -ms-overflow-style: none
      scrollbar-width: none
      &::-webkit-scrollbar
        display: none

      .product
        @apply min-w-[70vw] min-h-[80vh] bg-gray
</style>
