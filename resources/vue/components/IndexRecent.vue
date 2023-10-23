<script setup lang="ts">
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { useBlogStore } from '../../ts/stores/BlogStore'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed, ref } from 'vue'
import anime from 'animejs/lib/anime.es'

library.add(faCircleChevronLeft, faCircleChevronRight)

const browser = useBrowserStore()
const blog = useBlogStore()

const current = ref(0)

const prevActive = computed(() => {
  return current.value > 0 ? 'active' : 'inactive'
})

const nextActive = computed(() => {
  return current.value < blog.recent.length - 1 ? 'active' : 'inactive'
})

const onButtonClick = (i: number) => {
  const next = current.value + i
  if (next >= 0 && next < blog.recent.length) {
    anime({
      targets: '.posts-mobile-container',
      translateX: [current.value * -75 + 'vw', next * -75 + 'vw'],
      easing: 'spring(1, 80, 10, 10)',
    })
    current.value = next
  }
}

const getDateString = (date: Date): string => {
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
}
</script>

<template>
  <section id="recent">
    <div class="recent-container">
      <div class="recent-title">
        <h2 class="title">
          Recent
          <br v-if="!browser.isMobile" />
          Posts
        </h2>
      </div>

      <div v-if="browser.isMobile" class="posts-mobile">
        <div class="prev-button" :class="prevActive" @click="onButtonClick(-1)">
          <font-awesome-icon class="button-icon" :icon="['fas', 'circle-chevron-left']" size="2x" />
        </div>
        <div class="next-button" :class="nextActive" @click="onButtonClick(1)">
          <font-awesome-icon class="button-icon" :icon="['fas', 'circle-chevron-right']" size="2x" />
        </div>
        <div class="posts-mobile-container">
          <a v-for="post of blog.recent" :key="post.url" :href="post.url" class="post">
            <img class="post-image" :src="post.thumbnail" :alt="post.title" />
            <p class="post-title">{{ post.title }}</p>
            <p class="post-date">{{ getDateString(post.date) }}</p>
          </a>
        </div>
      </div>

      <div v-if="!browser.isMobile" class="posts-desktop">
        <a v-for="post of blog.recent" :key="post.url" :href="post.url" class="post">
          <img class="post-image" :src="post.thumbnail" :alt="post.title" />
          <p class="post-title">{{ post.title }}</p>
          <p class="post-date">{{ getDateString(post.date) }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
#recent
  @apply w-full
  @apply py-10
  @apply md:px-3 md:py-20
  @apply lg:px-10

  .recent-container
    @apply mx-auto
    @apply md:flex md:justify-between md:gap-10
    @apply lg:gap-14
    @apply xl:w-[90%]

    .recent-title
      @apply flex items-center
      @apply lg:w-1/3

      .title
        @apply font-inter
        @apply text-4xl border-l-[0.7rem] pl-4 py-2
        @apply max-md:ml-4
        @apply md:text-5xl md:border-l-[1rem] md:pl-5

    .posts-mobile
      @apply relative

      .prev-button, .next-button
        @apply absolute top-1/2 -translate-y-1/2 z-10 drop-shadow stroke-[0.5rem]

        &.active
          @apply text-primary stroke-gray

        &.inactive
          @apply text-gray stroke-white

      .prev-button
        @apply left-4

      .next-button
        @apply right-4

      .posts-mobile-container
        @apply flex overflow-x-visible py-10 gap-5

        .post:first-of-type
          @apply ml-[15vw]

    .posts-desktop
      @apply px-2 w-full
      @apply grid grid-cols-3 gap-3
      @apply lg:gap-6 xl:gap-8

    .post
      @apply flex flex-col border border-gray shadow shadow-gray rounded-lg
      @apply max-md:max-w-[70vw] max-md:min-w-[70vw]

      .post-image
        @apply w-full rounded-t-lg

      .post-texts
        @apply grow px-1.5 py-1

      .post-title, .post-date
        @apply px-1.5

      .post-title
        @apply font-bold pt-1
        @apply text-sm leading-tight
        @apply lg:text-base lg:leading-tight

      .post-date
        @apply mt-auto text-gray text-right font-bold
        @apply text-xs
        @apply lg:text-sm
</style>
