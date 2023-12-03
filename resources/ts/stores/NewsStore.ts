import { defineStore } from 'pinia'

export interface NewsProp {
  type: 'notice' | 'event' | 'release'
  date: string
  contents: NewsArticleContent[]
}

export interface NewsArticleContent {
  text: string // 内容
  utils?: string // Tailwind class
  line?: boolean // 改行
  link?: string // <a>のhref
}

export interface NewsArticle {
  type: string
  icon: string[]
  date: Date
  date_texts: {
    year: string
    month_day: string
  }
  contents: NewsArticleContent[]
}

export const useNewsStore = defineStore('news', {
  state: (): { articles: NewsArticle[] } => ({
    articles: [],
  }),
  getters: {
    getNews(state): NewsArticle[] {
      const now = new Date()
      return state.articles.filter((article: NewsArticle) => article.date <= now)
    },
  },
  actions: {
    addNews(news: NewsProp[]) {
      for (const article of news) {
        let type: string
        let icon: string[]

        if (article.type === 'notice') {
          type = 'お知らせ'
          icon = ['fas', 'rss']
        } else if (article.type === 'event') {
          type = 'イベント'
          icon = ['fas', 'calendar']
        } else if (article.type === 'release') {
          type = 'リリース'
          icon = ['fas', 'star']
        }

        const date = new Date(article.date)
        const date_str = article.date.split('/')

        this.articles.push({
          type,
          icon,
          date,
          date_texts: {
            year: date_str[0],
            month_day: `${date_str[1]}.${date_str[2]}`,
          },
          contents: article.contents,
        })
      }
      this.articles.sort((a, b) => {
        const n = a.date.getTime() - b.date.getTime()
        if (n > 0) {
          return -1
        } else if (n < 0) {
          return 1
        } else {
          return 0
        }
      })
    },
  },
})
