export class AppearEvent<T extends () => any> {
  el: HTMLElement
  isIntersecting: boolean
  observer: IntersectionObserver
  appearCallback: T[]
  disappearCallback: T[]
  mode: 'forward' | 'backward' | 'both'

  constructor(el: HTMLElement, mode?: 'forward' | 'backward' | 'both') {
    this.el = el
    this.isIntersecting = false
    this.observer = new IntersectionObserver(this.intersect.bind(this))
    this.observer.observe(el)
    this.appearCallback = []
    this.disappearCallback = []
    this.mode = mode === undefined ? 'both' : mode
  }

  intersect(entry: IntersectionObserverEntry[]) {
    if (entry[0].isIntersecting === this.isIntersecting) return
    if (entry[0].isIntersecting) {
      if (
        this.mode === 'both' ||
        (this.mode === 'forward' && entry[0].boundingClientRect.y > 0) ||
        (this.mode === 'backward' && entry[0].boundingClientRect.y <= 0)
      )
        this.appeared()
    } else {
      this.disappeared()
    }
    this.isIntersecting = entry[0].isIntersecting
  }

  addAppearEvent(callback: T) {
    this.appearCallback.push(callback)
  }

  clearAppearEvents() {
    this.appearCallback = []
  }

  addDisappearEvent(callback: T) {
    this.disappearCallback.push(callback)
  }

  clearDisappearEvents() {
    this.disappearCallback = []
  }

  clearEvents() {
    this.clearAppearEvents()
    this.clearDisappearEvents()
  }

  appeared() {
    for (const callback of this.appearCallback) {
      callback()
    }
  }

  disappeared() {
    for (const callback of this.disappearCallback) {
      callback()
    }
  }
}
