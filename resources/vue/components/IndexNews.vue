<script setup lang="ts">
import { NewsData, NewsText } from '../../ts/entities/News'
import { faRss, faCalendar, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { onBeforeMount, onMounted, reactive, ref } from 'vue'

library.add(faRss, faCalendar, faStar)

const browser = useBrowserStore()

interface Article {
  type: string
  icon: string[]
  y: string
  md: string
  texts: NewsText[]
}

const articles: Article[] = reactive([])

const buildArticles = () => {
  for (const news of NewsData) {
    let type: string
    let icon: string[]

    if (news.type === 'notice') {
      type = 'お知らせ'
      icon = ['fas', 'rss']
    } else if (news.type === 'event') {
      type = 'イベント'
      icon = ['fas', 'calendar']
    } else if (news.type === 'release') {
      type = 'リリース'
      icon = ['fas', 'star']
    }

    const date = news.date
      .toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .split('/')

    articles.push({
      type,
      icon,
      y: date[0],
      md: `${date[1]}.${date[2]}`,
      texts: news.texts,
    })
  }
}

onBeforeMount(() => {
  buildArticles()
})
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
            <div class="y">{{ article.y }}.</div>
            <div class="md">{{ article.md }}</div>
          </div>
          <div class="text">
            <template v-for="text in article.texts" :key="text">
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
  @apply w-full py-20

  .news-container
    @apply w-full max-w-[1200px] mx-auto

    .title
      @apply font-inter font-black text-4xl

    .news-contents
      @apply border-t border-r border-primary pt-8

      .article
        @apply flex w-full px-20 items-center gap-8 mb-8

        .badge
          @apply flex items-center w-fit bg-primary text-white p-3

          span
            @apply text-lg font-bold mr-5

        .date
          @apply font-inter font-bold

          .y
            @apply md:text-base md:leading-none

          .md
            @apply md:text-3xl md:leading-none

        .text
          a
            @apply font-bold text-link
</style>
