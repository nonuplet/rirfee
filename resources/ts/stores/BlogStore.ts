import { defineStore } from 'pinia'

export interface PostProp {
  title: string
  url: string
  date: string
  thumbnail: string
}

export interface Post {
  title: string
  url: string
  date: Date
  thumbnail: string
}

interface Blog {
  recent: Post[]
}

export const useBlogStore = defineStore('blog', {
  state: (): Blog => ({
    recent: [],
  }),
  actions: {
    addRecent(posts: PostProp[]) {
      for (const post of posts) {
        this.recent.push({
          title: post.title,
          url: post.url,
          date: new Date(post.date),
          thumbnail: post.thumbnail,
        })
      }
    },
  },
})
