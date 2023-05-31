export class AppearEvent<T extends () => any> {
  el: HTMLElement
  isIntersecting: boolean
  observer: IntersectionObserver
  appearCallback: T[]
  disappearCallback: T[]

  constructor(el: HTMLElement) {
    this.el = el
    this.observer = new IntersectionObserver(this.intersect.bind(this))
    this.observer.observe(el)
    this.appearCallback = []
    this.disappearCallback = []
  }

  intersect(entry) {
    if (entry[0].isIntersecting) {
      this.appeared()
    } else this.disappeared()
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
