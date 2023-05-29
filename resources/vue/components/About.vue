<template>
  <section id="about">
    <div class="title">
      <div
        class="title-bg"
        :class="{'title-bg-slide': transTest}"
      />
      <h2 class="title-text">
        ABOUT
      </h2>
    </div>
    <button @click="btnClick">
      テスト
    </button>
  </section>
</template>

<script>
import {ref} from "vue";

export default ({
  setup() {
    const transTest = ref(false)
    const btnClick = () => {
      if (transTest.value) {
        transTest.value = false
      } else {
        transTest.value = true
      }
    }
    return {transTest, btnClick}
  }
})
</script>


<style lang="sass" scoped>
#about
  @apply mt-24

.title
  @apply relative mx-auto w-44 h-16

.title-bg
  content: ""
  background-position-x: 100%
  background-size: 200% auto
  background-image: linear-gradient(to right, #FFFFFF 0%, #FFFFFF 50%, #231815 50%, #231815 100%)
  @apply absolute top-0 bottom-0 left-0 right-0 border-4 border-brown -skew-x-[30deg] transform-gpu -z-10

.title-bg-slide
  animation: anim-title-bg-slide 0.5s forwards

@keyframes anim-title-bg-slide
  0%
    background-position-x: 100%
  100%
    background-position-x: 0

.title-text
  @apply flex justify-center items-center w-full h-full font-bold text-3xl text-brown
</style>