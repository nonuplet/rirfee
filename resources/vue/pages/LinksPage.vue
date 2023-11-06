<script setup lang="ts">
import anime from 'animejs/lib/anime.es'
import { onMounted, ref } from 'vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'

const browser = useBrowserStore()

const center = ref({
  x: 0,
  y: 0,
})

const offset = ref(13)

const setLetterClass = () => {
  let t = document.querySelector('.sidebar-title')
  t.innerHTML = t.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
  t = document.querySelector('.sidebar-about')
  t.innerHTML = t.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
}

const calcParallax = () => {
  const bgMoveArea = document.getElementById('main')
  const bgImage = document.getElementById('background')

  const rect = bgMoveArea.getBoundingClientRect()
  center.value = {
    x: rect.width / 2 + rect.x,
    y: rect.height / 2 + rect.y,
  }

  const bgSize = bgImage.getBoundingClientRect()
  bgImage.style.top = `${center.value.x - bgSize.width / 2}px`
  bgImage.style.left = `${center.value.y - bgSize.height / 2}px`

  bgMoveArea.addEventListener('mousemove', (e) => {
    const x = (center.value.x - e.pageX) / offset.value
    const y = (center.value.y - e.pageY) / offset.value
    anime({
      targets: bgImage,
      translateX: x,
      translateY: y,
      easing: 'linear',
      duration: 400,
    })
  })
}

const startAnimation = () => {
  const timeline = anime.timeline()
  timeline.add({
    targets: '.sidebar-black',
    easing: 'easeInOutCirc',
    delay: 500,
    duration: 850,
    translateX: [0, '-96vw'],
    loop: false,
  })
  timeline.add(
    {
      targets: '.sidebar-blue',
      easing: 'easeInOutCirc',
      duration: 850,
      translateX: [0, '-95vw'],
      loop: false,
    },
    '-=600'
  )
  timeline.add({
    targets: '.letter',
    easing: 'easeInOutSine',
    opacity: [0, 1],
    delay: anime.stagger(25),
    loop: false,
  })
  timeline.add({
    targets: '.link-text',
    easing: 'easeInOutCirc',
    opacity: [0, 1],
    scale: [3, 1],
    delay: anime.stagger(150),
    loop: false,
  })
}

onMounted(() => {
  browser.onResize()
  window.addEventListener('resize', browser.onResize)

  setLetterClass()
  calcParallax()
  startAnimation()
})
</script>

<template>
  <div id="links-page">
    <div id="sidebar">
      <div class="sidebar-black">
        <div class="sidebar-container">
          <div class="sidebar-container-inner">
            <p class="sidebar-title">Rirfee.com social links page</p>
            <a href="/" class="sidebar-about">About</a>
          </div>
        </div>
      </div>
      <div class="sidebar-blue"></div>
    </div>
    <div id="background"></div>
    <main id="main">
      <a href="https://bsky.app/profile/nonuplet.bsky.social" class="link-text bluesky">Bluesky</a>
      <a href="https://bsky.app/profile/nonuplet.bsky.social" class="link-text blog">Blog</a>
      <a href="https://bsky.app/profile/nonuplet.bsky.social" class="link-text twitter">Twitter</a>
      <a href="https://bsky.app/profile/nonuplet.bsky.social" class="link-text github">Github</a>
      <a href="https://bsky.app/profile/nonuplet.bsky.social" class="link-text threads">Threads</a>
    </main>
  </div>
</template>

<style scoped lang="sass">
#links-page
  @apply relative w-[100lvw] h-[100lvh] bg-white overflow-hidden

  #sidebar
    .sidebar-black
      @apply absolute top-0 left-0 w-[100lvw] h-[100lvh] bg-black z-20

      .sidebar-container
        @apply ml-auto flex w-[4vw] h-full py-5 justify-center

        .sidebar-container-inner
          @apply inline-flex justify-between
          writing-mode: vertical-rl

          .sidebar-title, .sidebar-about
            @apply inline-block font-inter font-bold text-white
            @apply text-xs lg:text-base xl:text-lg

          .sidebar-about
            @apply text-right

    .sidebar-blue
      @apply absolute top-0 left-0 w-[100lvw] h-[100lvh] bg-linkpage-secondary z-10

  #background
    background-image: url('/img/links/links-bg.png')
    @apply absolute w-[120dvw] h-[120dvh] bg-cover bg-center

  #main
    @apply absolute w-[95dvw] h-[100dvh] top-0 right-0

    .link-text
      @apply absolute font-inter font-black text-white leading-none mix-blend-difference

      &:hover
        @apply text-[#00eeee]

    .bluesky
      @apply bottom-5 left-2 text-[13vw]
      @apply landscape:text-[16vw]

    .blog
      @apply bottom-5 right-2 text-[8vw]
      @apply landscape:text-[9vw]

    .twitter
      @apply top-[5vh] right-12 text-[8vw]
      @apply landscape:right-5 text-[15vh]
      writing-mode: vertical-rl

    .github
      @apply text-right top-[40vh] right-[18vw] text-[6vw]
      @apply landscape:top-[60vh] landscape:right-[25vw] landscape:text-[10vw]

    .threads
      @apply top-[20vh] left-[6vw] text-[5vw]
      @apply landscape:top-12
</style>
