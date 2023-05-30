<template>
  <section id="eye-catch">
    <img class="eye-catch-img" src="/img/index/eye-catch.png" />
    <img class="logo-icon" src="/img/logo/rirfee_logo.svg" />
    <!--    <div class="scroll-block">-->
    <!--      <font-awesome-icon-->
    <!--        class="scroll-icon"-->
    <!--        icon="fa-solid fa-circle-arrow-down"-->
    <!--      />-->
    <!--      <p class="scroll-text">-->
    <!--        Scroll-->
    <!--      </p>-->
    <!--    </div>-->
  </section>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleArrowDown)
export default {
  name: 'EyeCatch',
}
</script>

<style lang="sass" scoped>
#eye-catch
  @apply w-screen h-screen relative overflow-hidden

.eye-catch-img
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 65% 100%, 0% 85%)
  object-position: 20% 0%
  @apply object-cover w-full h-full

.logo-icon
  @apply absolute w-[40%] bottom-[10%] right-[10%]
  @apply lg:top-[50%] lg:right-[10%] lg:translate-y-[-50%] lg:rotate-6

.scroll-block
  @apply absolute bottom-3 left-3 w-1/2 h-[6%]
  @apply sm:bottom-5 sm:left-5 md:bottom-7 md:left-7

.scroll-icon
  @apply inline h-full animate-bounce

.scroll-text
  @apply inline text-2xl font-bold ml-1 align-[6px]

.scroll-text-temp
  @apply inline text-sm font-bold ml-1 align-[6px]
</style>
