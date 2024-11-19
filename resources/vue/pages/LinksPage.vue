<script setup lang="ts">
import anime from 'animejs/lib/anime.es'
import { nextTick, onMounted, ref } from 'vue'
import { useBrowserStore } from '../../ts/stores/BrowserStore'
import { SocialLinks } from '../../ts/entities/SocialLinks'

const links = ref(SocialLinks)
const browser = useBrowserStore()
const parallaxCenter = ref({
  x: 0,
  y: 0,
})
const sideBarTransition = ref({
  main: '-96vw',
  sub: '-95vw',
})
const offset = ref(13)
const layout: ref<'mobile' | 'portrait' | 'landscape'> = ref('mobile')

const main = ref()
const background = ref()

const onResize = () => {
  browser.onResize()
  if (browser.width < 768) {
    layout.value = 'mobile'
    sideBarTransition.value = {
      main: '-90vw',
      sub: '-88vw',
    }
  } else if (browser.width / browser.height < 1.1) {
    layout.value = 'portrait'
    sideBarTransition.value = {
      main: '-96vw',
      sub: '-95vw',
    }
  } else {
    layout.value = 'landscape'
    sideBarTransition.value = {
      main: '-96vw',
      sub: '-95vw',
    }
  }
  const timeline = anime.timeline()
  timeline.add({
    targets: '.sidebar-black',
    easing: 'easeInOutCirc',
    delay: 500,
    duration: 850,
    translateX: sideBarTransition.value.main,
    loop: false,
  })
  timeline.add(
    {
      targets: '.sidebar-blue',
      easing: 'easeInOutCirc',
      duration: 850,
      translateX: sideBarTransition.value.sub,
      loop: false,
    },
    '-=600',
  )
  calcParallax()
}

const setLetterClass = () => {
  // TODO:まとめる
  let t = document.querySelector('.sidebar-title')
  t.innerHTML = t.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
  t = document.querySelector('.sidebar-about')
  t.innerHTML = t.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
}

const calcParallax = () => {
  const mainBounding = main.value.getBoundingClientRect()
  const bgBounding = background.value.getBoundingClientRect()

  parallaxCenter.value = {
    x: mainBounding.width + mainBounding.x,
    y: mainBounding.height,
  }

  if (layout.value === 'mobile') {
    background.value.style.top = '0'
    background.value.style.left = '0'
    background.value.style.transform = 'translateX(0) translateY(0)'
  } else {
    const top = (mainBounding.height - bgBounding.height) / 2
    const left = (mainBounding.width + mainBounding.x - bgBounding.width) / 2
    background.value.style.top = top + 'px'
    background.value.style.left = left + 'px'
  }
}

const onParallaxMove = (e: MouseEvent) => {
  if (layout.value !== 'mobile') {
    const x = (parallaxCenter.value.x - e.pageX) / offset.value
    const y = (parallaxCenter.value.y - e.pageY) / offset.value
    anime({
      targets: background.value,
      translateX: x,
      translateY: y,
      easing: 'linear',
      duration: 400,
    })
  }
}

const startAnimation = () => {
  const timeline = anime.timeline()
  timeline.add({
    targets: '.sidebar-black',
    easing: 'easeInOutCirc',
    delay: 500,
    duration: 850,
    translateX: [0, sideBarTransition.value.main],
    loop: false,
  })
  timeline.add(
    {
      targets: '.sidebar-blue',
      easing: 'easeInOutCirc',
      duration: 850,
      translateX: [0, sideBarTransition.value.sub],
      loop: false,
    },
    '-=600',
  )
  timeline.add({
    targets: '.letter',
    easing: 'easeInOutSine',
    opacity: [0, 1],
    delay: anime.stagger(15),
    loop: false,
  })
  timeline.add(
    {
      targets: '.link-text',
      easing: 'easeInOutCirc',
      opacity: [0, 1],
      scale: [3, 1],
      delay: anime.stagger(150),
      loop: false,
    },
    '-=1500',
  )
}

onMounted(() => {
  main.value = document.getElementById('main')
  background.value = document.getElementById('background')

  onResize()
  window.addEventListener('resize', onResize)
  setLetterClass()
  nextTick(() => {
    // onResize()が走った次のフレームにならないと#backgroundのサイズが確定しない
    calcParallax()
    startAnimation()
    main.value.addEventListener('mousemove', onParallaxMove)
  })
})
</script>

<template>
  <div id="links-page">
    <div id="sidebar">
      <div class="sidebar-black">
        <div :class="['sidebar-container', layout]">
          <div class="sidebar-container-inner">
            <p class="sidebar-title">Rirfee.com social links page</p>
            <a href="/" class="sidebar-about">About</a>
          </div>
        </div>
      </div>
      <div class="sidebar-blue" />
    </div>
    <div id="background" :class="layout" />
    <main id="main" :class="layout">
      <a v-for="link of links" :key="link.title" :class="['link-text', layout, link.css]" :href="link.href">{{
        link.title
      }}</a>
    </main>
  </div>
</template>

<style scoped lang="sass">
#links-page
  @apply relative w-[100dvw] h-[100dvh] bg-white overflow-hidden

  #sidebar
    .sidebar-black
      @apply absolute top-0 left-0 w-[100lvw] h-[100dvh] bg-black z-20

      .sidebar-container
        @apply ml-auto flex h-full py-5 justify-center
        &.mobile
          @apply w-[10vw]

        &.portrait, &.landscape
          @apply w-[4vw]

        .sidebar-container-inner
          @apply inline-flex justify-between
          writing-mode: vertical-rl

          .sidebar-title, .sidebar-about
            @apply inline-block font-inter font-bold text-white
            @apply text-sm lg:text-base xl:text-lg

          .sidebar-about
            @apply text-right

    .sidebar-blue
      @apply absolute top-0 left-0 w-[100dvw] h-[100dvh] bg-linkpage-secondary z-10

  #background
    background-image: url('/img/links/links-bg.png')
    @apply absolute bg-cover

    &.mobile
      @apply w-[100lvw] h-[100lvh] top-0 left-0
      background-position: 28% 50%

    &.portrait, &.landscape
      @apply bg-center w-[120lvw] h-[120lvh]

  #main
    @apply absolute h-[100dvh] top-0 right-0

    &.mobile
      @apply w-[90dvw]

    &.portrait, &.landscape
      @apply w-[95dvw]

    .link-text
      @apply absolute font-inter font-black text-white leading-none mix-blend-difference
      @apply transition-all ease-in-out duration-1000

      &:hover
        @apply text-[#00eeee]

    .bluesky
      &.mobile
        @apply bottom-2 left-5 text-[20vw]

      &.portrait
        @apply bottom-[5vh] left-[3vw] text-[16vw]

      &.landscape
        @apply bottom-5 left-2 text-[13vw]

    .blog
      @apply bottom-5 right-2
      &.mobile
        @apply bottom-[16vh] right-[5vw] text-[15vw]

      &.portrait, &.landscape
        @apply text-[8vw]

    .twitter
      writing-mode: vertical-rl

      &.mobile
        @apply top-[4vh] right-2 text-[10vh]

      &.portrait
        @apply top-[2vh] right-3 text-[13vh]

      &.landscape
        @apply top-[5vh] right-12 text-[8vw]

    .github
      &.mobile
        @apply bottom-[35vh] left-[7vw] text-[14vw]

      &.portrait
        @apply top-[65vh] right-[10vw] text-[8vw]

      &.landscape
        @apply top-[40vh] right-[18vw] text-[6vw]

    .zenn
      &.mobile
        @apply bottom-[18vh] left-[7vw] text-[10vw]

      &.portrait
        @apply top-[55vh] right-[30vw] text-[6vw]

      &.landscape
        @apply bottom-[30vh] left-[16vw] text-[6vw]

    .qiita
      &.mobile
        @apply bottom-[30vh] right-[5vw] text-[7vw]

      &.portrait
        @apply top-[48vh] right-[20vw] text-[5vw]

      &.landscape
        @apply bottom-[44vh] left-[5vw] text-[4vw]
</style>
