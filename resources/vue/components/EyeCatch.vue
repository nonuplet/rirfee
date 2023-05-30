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
    <img class="eye-catch-img" src="/img/index/eye-catch.png" alt="eye-catch-img" />
    <img id="eye-catch-logo" src="/img/logo/rirfee_logo.svg" alt="logo" />
    <a id="eye-catch-scroll" href="#about">
      <div class="scroll-inner">
        <font-awesome-icon class="bottom-arrow" :icon="['fas', 'circle-down']" size="2xl" />
        <span class="scroll-text">Scroll</span>
      </div>
    </a>
  </section>
</template>

<style lang="sass" scoped>
#eye-catch
  @apply w-full h-screen relative overflow-hidden bg-black

.eye-catch-img
  @apply object-cover opacity-60 w-full h-full
  object-position: 20% 0

#eye-catch-logo
  @apply absolute transition-all ease-in-out duration-[3s] opacity-0
  @apply w-[clamp(1rem,60%,20rem)] top-[20%] max-md:left-[50%] translate-y-32 max-md:-translate-x-1/2
  @apply md:w-[30%] md:top-[50%] md:right-[10%] md:-rotate-6

  &.animate
    @apply translate-y-0 opacity-100 md:rotate-6

#eye-catch-scroll
  @apply absolute block w-full h-fit bottom-4


  .scroll-inner
    @apply flex items-center bg-primary rounded-full bg-clip-border drop-shadow-md animate-bounce w-[min(50%,250px)] mx-auto
    @apply px-2 py-2
    @apply md:px-10

    .bottom-arrow
      @apply text-white

    .scroll-text
      @apply block grow text-center text-white font-inter font-black
      @apply text-xl
      @apply md:text-2xl
</style>
