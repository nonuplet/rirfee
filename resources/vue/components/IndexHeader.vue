<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBars, faSquarePen } from '@fortawesome/free-solid-svg-icons'
import { onMounted, onUnmounted, ref } from 'vue'

library.add(faBars, faTwitter, faGithub, faSquarePen)

const isMenuOpen = ref(false)

const isMobile = ref(false)
const BREAKPOINT_MD = 768 // tailwind "md" size
const screenWidth = ref(0)
const changedScreenWidth = ref(false)

const isHeaderVisible = ref(true)
const scrollToBottom = ref(true)
const scrollBaseY = ref(0)
const scrollBeforeY = ref(0)
const HEADER_CHANGE_OFFSET = 300
const HEADER_MIN_Y = 100

const hamburgerToggle = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const onChangeScreen = () => {
  const newWidth = document.documentElement.clientWidth
  if (screenWidth.value === newWidth) return
  screenWidth.value = newWidth
  isMobile.value = newWidth < BREAKPOINT_MD
  isMenuOpen.value = false
  changedScreenWidth.value = true
}

const onMenuSelected = () => {
  isMenuOpen.value = false
}

const onScroll = () => {
  const current = window.scrollY

  if (scrollToBottom.value) {
    // 下向き
    if (current < scrollBeforeY.value) {
      scrollToBottom.value = false
      scrollBaseY.value = current
    } else if (isHeaderVisible.value && current - scrollBaseY.value > HEADER_CHANGE_OFFSET) {
      isHeaderVisible.value = false
      isMenuOpen.value = false
    }
  } else {
    // 上向き
    if (current > scrollBeforeY.value) {
      scrollToBottom.value = true
      scrollBaseY.value = current
    } else if (
      !isHeaderVisible.value &&
      (scrollBaseY.value - current > HEADER_CHANGE_OFFSET || current < HEADER_MIN_Y)
    ) {
      isHeaderVisible.value = true
    }
  }
  scrollBeforeY.value = current
}

/** 画面サイズが Desktop -> Mobile に変わった時アニメーションを阻止するための対応 */
const onFirstTransition = () => {
  if (!changedScreenWidth.value) return
  changedScreenWidth.value = false
}

onMounted(() => {
  window.addEventListener('resize', onChangeScreen)
  window.addEventListener('scroll', onScroll)
  onChangeScreen()
  scrollBaseY.value = window.scrollY
  scrollBeforeY.value = window.scrollY
})

onUnmounted(() => {
  window.removeEventListener('resize', onChangeScreen)
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header id="index-header">
    <nav class="header-wrapper">
      <transition name="left">
        <div v-show="isHeaderVisible" class="left">
          <a href="/">
            <img class="icon" src="favicon.svg" alt="rirfee.com" />
          </a>
        </div>
      </transition>
      <transition name="right">
        <div v-show="isHeaderVisible" class="hamburger" @click="hamburgerToggle()">
          <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
        </div>
      </transition>
      <transition name="right" @after-enter="onFirstTransition" @after-leave="onFirstTransition">
        <div
          v-show="isHeaderVisible && (isMenuOpen || !isMobile)"
          class="right"
          :class="{ inactive: changedScreenWidth }"
        >
          <div class="text-items">
            <a href="#about" class="item" @click="onMenuSelected">About</a>
            <a href="#products" class="item" @click="onMenuSelected">Products</a>
            <a href="#posts" class="item" @click="onMenuSelected">Posts</a>
          </div>
          <div class="icon-items">
            <!-- TODO: envから読み込む -->
            <a class="item" href="https://twitter.com/nonuplet_">
              <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
            </a>
            <a class="item" href="https://github.com/nonuplet">
              <font-awesome-icon :icon="['fab', 'github']" size="lg" />
            </a>
            <a class="item" href="/blog/">
              <font-awesome-icon :icon="['fas', 'square-pen']" size="lg" />
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
#index-header
  @apply w-screen fixed mt-2 z-50 text-primary

  .header-wrapper
    @apply flex flex-wrap

    .left
      @apply bg-white rounded-r-full drop-shadow-xl
      @apply px-4 py-1
      @apply md:px-8

      .icon
        @apply w-10
        @apply md:w-16

    .hamburger
      @apply ml-auto flex items-center bg-white drop-shadow-xl pl-6 pr-4 py-1 rounded-l-full
      @apply md:hidden

      .icon
        @apply w-10
        @apply md:w-16

    .right
      @apply ml-auto items-center justify-end leading-none bg-white drop-shadow-xl font-inter font-black text-2xl
      @apply max-md:w-full rounded-l-xl max-md:mt-6 pl-6 pr-4 py-1
      @apply md:inline-flex md:rounded-l-full md:px-8

      &.inactive
        @apply max-md:hidden

      .text-items
        @apply max-md:mb-2 max-md:pb-4 max-md:border-b
        @apply md:px-6

        .item
          @apply max-md:block max-md:w-full max-md:py-2 max-md:my-3 max-md:border-l-4 max-md:pl-4
          @apply md:mr-6

        &:last-of-type
          @apply md:mr-0

      .icon-items
        @apply max-md:w-1/2 max-md:mx-auto max-md:grid max-md:grid-cols-3 text-center max-md:mb-3
        @apply md:border-l-4 md:pl-6

        .item
          @apply max-md:w-full max-md:py-2
          @apply md:mr-6

        &:last-of-type
          @apply md:mr-0


.left-enter-active
  animation: push-from-left 0.5s ease-in-out forwards

.left-leave-active
  animation: push-from-left 0.5s ease-in-out reverse

.left-enter-from, .left-leave-to
  transform: translateX(-150%)

.left-enter-to, .left-leave-from
  transform: translateX(0%)


.right-enter-active
  animation: push-from-right 0.5s ease-in-out forwards

.right-leave-active
  animation: push-from-right 0.5s ease-in-out reverse

.right-enter-from, .right-leave-to
  transform: translateX(150%)

.right-enter-to, .right-leave-from
  transform: translateX(0%)

@keyframes push-from-left
  0%
    transform: translateX(-150%)
  100%
    transform: translateX(0%)

@keyframes push-from-right
  0%
    transform: translateX(150%)
  100%
    transform: translateX(0%)
</style>
