<script setup lang="ts"></script>

<template>
  <footer id="footer">
    <div class="footer-container">
      <div class="footer-left">
        <img class="footer-logo" src="/img/logo/rirfee_logo.svg" alt="logo" />
        <p class="footer-copyright">@2023-2024 Kokonoe</p>
      </div>
      <div class="footer-right">
        <p class="footer-link-title">LINKS:</p>
        <ol class="footer-link-list">
          <li>このサイトについて</li>
          <li>プライバシーポリシー</li>
        </ol>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass">
#footer
  @apply w-full bg-dark-gray py-12
  @apply px-[5%]
  @apply md:px-[10%]

  .footer-container
    @apply flex justify-between

    .footer-left
      @apply text-center
      @apply xl:flex xl:items-center xl:gap-6

      .footer-logo
        @apply w-32 mb-2
        @apply xl:w-52

      .footer-copyright
        @apply font-inter font-black text-primary
        @apply text-xs
        @apply xl:text-xl xl:text-2xl

    .footer-right

      .footer-link-title
        @apply text-on-dark-gray font-black

      .footer-link-list
        @apply pl-4 text-sm list-disc
        @apply md:pr-8
</style>
