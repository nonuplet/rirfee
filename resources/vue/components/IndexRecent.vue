<script setup lang="ts">
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { useBlogStore } from '../../ts/stores/BlogStore'

const browser = useBrowserStore()
const blog = useBlogStore()

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

      <div class="posts">
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
  @apply w-full bg-white py-20
  @apply px-3
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
        @apply md:text-5xl md:border-l-[1rem] md:pl-5

    .posts
      @apply px-2 w-full
      @apply grid grid-cols-3 gap-3
      @apply lg:gap-6 xl:gap-8

      .post
        @apply flex flex-col border border-gray shadow shadow-gray rounded-lg

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
