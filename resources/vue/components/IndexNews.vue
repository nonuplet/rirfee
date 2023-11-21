<script setup lang="ts">
import { faRss, faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { ref } from 'vue'
import { useNewsStore } from '../../ts/stores/NewsStore'

library.add(faRss, faCalendar, faStar)

const news = useNewsStore()

const articles = ref(news.getNews)
</script>

<template>
  <section id="news">
    <div class="news-container">
      <h1 class="title">NEWS</h1>
      <div class="news-contents">
        <div v-for="(article, index) in articles" :key="index" class="article">
          <div class="badge">
            <span>{{ article.type }}</span>
            <font-awesome-icon :icon="article.icon" size="xl" />
          </div>
          <div class="date">
            <div class="y">{{ article.date_texts.year }}.</div>
            <div class="md">{{ article.date_texts.month_day }}</div>
          </div>
          <div class="text">
            <template v-for="text in article.contents" :key="text">
              <a v-if="text.link !== undefined" :href="text.link" :class="text.utils">{{ text.text }}</a>
              <span v-else :class="text.utils">{{ text.text }}</span>
              <br v-if="text.line" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
#news
  @apply w-full
  @apply py-8
  @apply md:py-20

  .news-container
    @apply w-full px-2 max-w-[1200px] mx-auto

    .title
      @apply font-inter font-black text-4xl

    .news-contents
      @apply border-t border-r border-primary
      @apply pt-6 pb-3

      .article
        @apply flex w-full items-center mb-8
        @apply px-2 max-md:flex-wrap gap-2
        @apply md:px-20 md:gap-8

        .badge
          @apply flex items-center w-fit bg-primary text-white p-3
          @apply max-md:py-1.5

          span
            @apply font-bold
            @apply text-base mr-3
            @apply md:text-lg md:mr-5

        .date
          @apply font-inter font-bold
          @apply max-md:ml-2

          .y, .md
            @apply max-md:inline-block max-md:text-xl

          .y
            @apply md:text-base md:leading-none

          .md
            @apply md:text-3xl md:leading-none

        .text
          @apply px-1
          a
            @apply font-bold text-link
</style>
