<script setup lang="ts">
import ScrollMagic from 'scrollmagic'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { storeToRefs } from 'pinia'
import { Products } from '../../ts/entities/Product'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faArrowRight)

const browser = useBrowserStore()
const { width: windowWidth } = storeToRefs(browser)
watch(windowWidth, () => {
  changeScrollEvent()
})

const width = ref(0)
const controller = ref(new ScrollMagic.Controller())
const scene = ref(null)

const products = ref(Products)

const frame = ref<HTMLElement>(null)
const vBox = ref<HTMLElement>(null)

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

const iconSize = computed(() => {
  return browser.isMobile ? 'lg' : '3x'
})

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
        <a
          v-for="p of products"
          :key="p.title"
          class="product"
          :style="{ 'background-image': 'url(' + p.image + ')' }"
          :href="p.link"
        >
          <div class="product-bottom">
            <div class="product-details">
              <p class="product-subtitle">
                {{ p.subtitle }}
              </p>
              <h3 class="product-title">
                {{ p.title }}
              </h3>
              <p class="product-description">
                {{ p.description }}
              </p>
            </div>
            <div class="product-widget">
              <div class="product-link">
                <font-awesome-icon :icon="['fas', 'arrow-right']" :size="iconSize" />
              </div>
            </div>
          </div>
        </a>
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
      @apply flex gap-8 px-[15vw] overflow-x-scroll
      -ms-overflow-style: none
      scrollbar-width: none

      &::-webkit-scrollbar
        display: none

      .product
        @apply relative min-w-[70vw] min-h-[80vh] bg-gray bg-cover bg-center @container

        .product-bottom
          @apply absolute bottom-0 w-full flex justify-between
          @apply h-1/2 md:h-1/3
          background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 95%, rgba(0, 0, 0, 0))

          .product-details
            @apply pl-[2vw]
            @apply w-full pt-3
            @apply @md:py-[2vh]

            .product-subtitle
              @apply text-gray text-base font-bold
              @apply xl:text-lg

            .product-title
              @apply text-white text-4xl font-black font-inter
              @apply border-b border-gray border-dashed
              @apply xl:text-5xl

            .product-description
              @apply py-2 text-sm text-white
              @apply @lg:text-lg
              @apply @xl:text-base

          .product-widget
            @apply flex grow align-bottom text-center pr-1 pb-1
            @apply md:p-3

            .product-link
              @apply rounded-full mt-auto drop-shadow-md ml-auto
              @apply bg-white text-primary hover:bg-primary hover:text-white
              @apply p-1 max-md:w-8 max-md:h-8
              @apply md:p-3
</style>
