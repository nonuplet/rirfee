<script setup lang="ts">
import anime from 'animejs/lib/anime.es'
import { onMounted } from 'vue'

const setLetterClass = () => {
  let t = document.querySelector('.sidebar-title')
  t.innerHTML = t.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
  t = document.querySelector('.sidebar-about')
  t.innerHTML = t.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
}

onMounted(() => {
  setLetterClass()

  const timeline = anime.timeline()
  timeline.add({
    targets: '.sidebar-black',
    easing: 'easeInOutCirc',
    delay: 500,
    duration: 850,
    translateX: [0, '-95vw'],
    loop: false,
  })
  timeline.add(
    {
      targets: '.sidebar-blue',
      easing: 'easeInOutCirc',
      duration: 850,
      translateX: [0, '-94vw'],
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
  </div>
</template>

<style scoped lang="sass">
#links-page
  @apply relative w-[100vw] h-[100vh] bg-white

  #sidebar
    .sidebar-black
      @apply absolute top-0 left-0 w-[100vw] h-[100vh] bg-black z-20

      .sidebar-container
        @apply ml-auto flex w-[4vw] h-full py-5 justify-center

        .sidebar-container-inner
          @apply inline-flex justify-between
          writing-mode: vertical-rl

          .sidebar-title, .sidebar-about
            @apply inline-block font-inter font-bold text-white

    .sidebar-blue
      @apply absolute top-0 left-0 w-[100vw] h-[100vh] bg-linkpage-secondary z-10
</style>
