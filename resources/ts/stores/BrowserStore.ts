import { defineStore } from 'pinia'

export interface Browser {
  isMobile: boolean
  width: number
  height: number
}

export const useBrowserStore = defineStore('browser', {
  state: (): Browser => ({
    isMobile: false,
    width: 0,
    height: 0,
  }),
  actions: {
    onResize() {
      const w = window.innerWidth
      if (w === this.width) return
      this.width = w
      this.height = window.innerHeight
      this.isMobile = w < 768 // Tailwind md:
    },
  },
})
