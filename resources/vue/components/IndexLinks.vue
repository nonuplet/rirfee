<script setup lang="ts">
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitter, faGithub, faPenNib)
</script>

<template>
  <section id="links">
    <div class="links-container">
      <div class="title-box">
        <h3 class="title-text">Follow Me!</h3>
        <div class="title-arrow">
          <svg width="300px" height="20px" viewbox="0 0 300 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="2" y1="10" x2="298" y2="10" />
            <path d="M285,5 L298,10 L285,15" />
          </svg>
        </div>
      </div>
      <div class="links-box">
        <font-awesome-icon :icon="['fab', 'twitter']" size="3x" />
        <font-awesome-icon :icon="['fab', 'github']" size="3x" />
        <font-awesome-icon :icon="['fas', 'pen-nib']" size="3x" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
#links
  @apply py-20
  @apply md:mx-auto md:max-w-[80%]

  .arrow
    @apply grow

  .links-container
    @apply flex justify-between items-center
    @apply md:gap-28

    .title-box

      .title-text
        @apply text-black font-inter text-5xl

      .title-arrow
        @apply stroke-[3px] stroke-primary
        stroke-linecap: round
        stroke-linejoin: round

    .links-box
      @apply grow flex justify-center rounded-2xl bg-white shadow-inner shadow-gray py-4 px-4 text-center gap-8
</style>
