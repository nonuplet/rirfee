<script setup lang="ts">
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, onMounted, ref, watch } from 'vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { storeToRefs } from 'pinia'

library.add(faTwitter, faGithub, faPenNib)

const browser = useBrowserStore()
const { width: screenWidth } = storeToRefs(browser)

const titleRef = ref<HTMLElement>()

const arrow = ref({
  width: 0,
  height: 0,
  viewBox: '0 0 0 0',
  line: '',
  arrow: '',
})

const viewboxOffset = ref(2)

const calcArrow = () => {
  if (browser.isMobile) {
    // Mobile - Height 50px
    arrow.value.width = titleRef.value.clientWidth
    arrow.value.viewBox = `0 0 ${arrow.value.width - viewboxOffset.value} 40`
    arrow.value.line = `\
     M${viewboxOffset.value},10 \
     L${arrow.value.width - viewboxOffset.value - 5},10 \
     L${arrow.value.width * 0.85},35`
  } else {
    // Desktop - height 20px
    arrow.value.width = titleRef.value.clientWidth
    arrow.value.viewBox = `0 0 ${arrow.value.width - viewboxOffset.value} 20`
    arrow.value.line = `M${viewboxOffset.value},10 L${arrow.value.width - viewboxOffset.value - 5},10`
  }
}

const linkIconSize = computed(() => {
  return browser.isMobile ? '2x' : '3x'
})

watch(screenWidth, () => {
  calcArrow()
})

onMounted(() => {
  browser.onResize()
  calcArrow()
})
</script>

<template>
  <section id="links">
    <div class="links-container">
      <div class="title-box">
        <h3 ref="titleRef" class="title-text">Follow Me!</h3>
        <svg
          class="arrow-container"
          preserveAspectRatio="none"
          :viewbox="arrow.viewBox"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrow_edge"
              viewBox="0 0 10 10"
              markerunits="userSpaceOnUse"
              markerWidth="10"
              markerHeight="10"
              refX="7.5"
              refY="5"
              orient="auto"
              stroke-width="1"
            >
              <path d="M4,2 L8,5 L4,8" />
            </marker>
          </defs>
          <path :d="arrow.line" marker-end="url(#arrow_edge)" stroke-width="3" />
        </svg>
      </div>
      <div class="links-box">
        <a href="https://bsky.app/profile/nonuplet.bsky.social">
          <font-awesome-icon :icon="['fab', 'twitter']" :size="linkIconSize" />
        </a>
        <a href="https://github.com/nonuplet">
          <font-awesome-icon :icon="['fab', 'github']" :size="linkIconSize" />
        </a>
        <a href="https://rirfee.com/blog">
          <font-awesome-icon :icon="['fas', 'pen-nib']" :size="linkIconSize" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
#links
  @apply py-20
  @apply md:mx-auto md:max-w-[80%]

  .arrow
    @apply grow

  .links-container
    @apply md:flex justify-between items-center md:gap-28

    .title-box
      @apply mx-auto max-md:w-[70%]

      .title-text
        @apply text-black font-inter
        @apply text-4xl text-left
        @apply md:text-5xl md:text-left

      .arrow-container
        @apply stroke-[3px] stroke-primary w-full
        @apply h-[45px]
        @apply md:h-[20px]
        stroke-linecap: round
        stroke-linejoin: round

    .links-box
      @apply grow max-w-[80%] mx-auto flex justify-center rounded-2xl bg-white shadow-inner shadow-gray py-4 px-4 text-center gap-8
</style>
