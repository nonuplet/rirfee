<script setup lang="ts">
import { faXTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePen } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { ExternalLinks } from '../../ts/entities/ExternalLinks'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faXTwitter, faGithub, faSquarePen)
const links = ExternalLinks
</script>

<template>
  <section id="links">
    <div class="title">Follow Me!</div>
    <div class="links-container">
      <a v-for="link of links" :key="link.name" class="link" :href="link.href">
        <img v-if="link.imgSrc !== undefined" class="link-icon" :src="link.imgSrc" :alt="link.name" />
        <font-awesome-icon
          v-if="link.faIcon"
          class="link-icon"
          :icon="link.faIcon"
          size="2x"
          :style="link.faIconStyle"
        />
        <div class="link-texts">
          <p class="link-name">{{ link.name }}</p>
          <p class="link-id">{{ link.sns_id }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped lang="sass">
#links
  @apply py-20 px-4 w-full max-w-[1200px] mx-auto
  @apply md:px-10

  .title
    @apply text-primary font-inter text-left text-4xl pb-8
    @apply md:text-5xl md:pb-12

  .links-container
    @apply w-full grid grid-cols-1 gap-4 px-2
    @apply md:px-4 md:grid-cols-2
    @apply lg:gap-12 xl:grid-cols-3

    .link
      @apply flex grow w-full border rounded-lg p-3 gap-2 justify-between items-center bg-bgcolor
      @apply hover:bg-white

      .link-icon
        @apply w-[32px] h-[32px]
        @apply md:w-[42px] md:h-[42px]

      .link-texts
        @apply font-inter text-right

        .link-name
          @apply text-[1.4rem] text-primary leading-none
          @apply md:text-[1.5rem]

        .link-id
          @apply text-lg text-gray leading-tight
          @apply md:text-xl
</style>
