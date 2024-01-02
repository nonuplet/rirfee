<script setup lang="ts">
import { nextTick, onMounted } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleDown)

onMounted(() => {
  nextTick(() => {
    document.getElementById('eye-catch-logo').classList.add('animate')
  })
})
</script>

<template>
  <section id="eye-catch">
    <img class="eye-catch-img" src="/img/index/eye-catch-202401.png" alt="eye-catch-img" />
    <img id="eye-catch-logo" src="/img/logo/rirfee_logo.svg" alt="logo" />
    <div id="eye-catch-scroll">
      <a class="scroll-inner" href="#about">
        <font-awesome-icon class="bottom-arrow" :icon="['fas', 'circle-down']" size="2xl" />
        <span class="scroll-text">Scroll</span>
      </a>
    </div>
  </section>
</template>

<style lang="sass" scoped>
#eye-catch
  @apply w-full h-screen relative overflow-hidden bg-black

.eye-catch-img
  @apply object-cover opacity-60 w-full h-full
  object-position: 50% 0

#eye-catch-logo
  @apply absolute transition-all ease-in-out duration-[3s] opacity-0
  @apply w-[clamp(1rem,60%,20rem)] bottom-[30%] max-lg:left-[50%] translate-y-32 max-lg:-translate-x-1/2
  @apply md:w-[60%] md:bottom-[25%]
  @apply lg:w-[30%] lg:top-[50%] lg:left-[10%] lg:rotate-6

  &.animate
    @apply translate-y-0 opacity-100 lg:-rotate-6

#eye-catch-scroll
  @apply absolute block w-full h-fit bottom-4


  .scroll-inner
    @apply flex items-center bg-primary rounded-full bg-clip-border drop-shadow-md animate-bounce w-[min(50%,250px)] mx-auto
    @apply px-2 py-2
    @apply md:max-lg:px-10 md:max-lg:py-3 md:max-lg:w-[45%]

    .bottom-arrow
      @apply text-white

    .scroll-text
      @apply block grow text-center text-white font-inter font-black
      @apply text-xl
      @apply md:text-4xl
      @apply lg:text-3xl
</style>
