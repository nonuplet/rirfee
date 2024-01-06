<script setup lang="ts">
import anime from 'animejs/lib/anime.es'
import { nextTick, onMounted, ref } from 'vue'
import { AppearEvent } from '../../ts/utils/AppearEvent'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCss3, faGolang, faHtml5, faJava, faLinux, faUnity } from '@fortawesome/free-brands-svg-icons'
import { Skill, Skills } from '../../ts/entities/Skill'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUnity, faHtml5, faCss3, faLinux, faGolang, faJava)

const appearedAnimation = () => {
  const timeline = anime.timeline()
  timeline.add({
    targets: '#about-background-text svg .cls-1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'normal',
    loop: false,
  })
  timeline.add(
    {
      targets: '#about-picture-img',
      translateX: ['20px', 0],
      translateY: ['20px', 0],
      easing: 'easeInOutSine',
      duration: 2000,
      direction: 'normal',
      loop: false,
    },
    100
  )
  timeline.add(
    {
      targets: '#about-title-desktop, #about-title-mobile, .about-description, .about-skills',
      opacity: [0, '100%'],
      translateY: ['50px', 0],
      easing: 'easeInOutSine',
      duration: 1000,
      delay: anime.stagger(300),
      direction: 'normal',
      loop: false,
    },
    0
  )
}

const skills = ref(Skills)
const info = ref({
  isOpen: false,
  current: '',
  skill: {
    title: '',
    level: 0,
    description: '',
  } as Skill,
})

const onClickIcon = (skill: Skill) => {
  if (info.value.current === skill.title) {
    info.value.isOpen = false
    info.value.current = ''
    closeInfoAnimation()
  } else {
    if (!info.value.isOpen) {
      info.value.isOpen = true
      info.value.current = skill.title
      info.value.skill = {
        title: skill.title,
        level: skill.level,
        description: skill.description,
        faIcon: skill.faIcon ?? undefined,
        iconSrc: skill.iconSrc ?? undefined,
        style: skill.style ?? undefined,
      }
      nextTick(() => openInfoAnimation())
    } else {
      closeInfoAnimation().then(() => {
        info.value.current = skill.title
        info.value.skill = {
          title: skill.title,
          level: skill.level,
          description: skill.description,
          faIcon: skill.faIcon ?? undefined,
          iconSrc: skill.iconSrc ?? undefined,
          style: skill.style ?? undefined,
        }
        nextTick(() => openInfoAnimation())
      })
    }
  }
}

const openInfoAnimation = () => {
  const h = document.getElementById('skill-info-box-inner').offsetHeight + 'px'
  const gauge = info.value.skill.level * 20 + '%'

  const timeline = anime.timeline()
  timeline.add({
    targets: '#skill-info-box',
    height: [0, h],
    duration: 1000,
    easing: 'easeOutBounce',
    direction: 'normal',
    loop: false,
  })
  timeline.add({
    targets: '#skill-info-bar-value',
    easing: 'easeInOutSine',
    width: [0, gauge],
    duration: 500,
    direction: 'normal',
    loop: false,
  })
}

const closeInfoAnimation = async () => {
  const h = document.getElementById('skill-info-box-inner').offsetHeight + 'px'
  return anime({
    targets: '#skill-info-box',
    height: [h, 0],
    duration: 200,
    easing: 'easeInSine',
    direction: 'normal',
    loop: false,
  }).finished
}

onMounted(() => {
  const about = document.getElementById('about')
  const aboutIntersection = new AppearEvent(about, 'forward')
  aboutIntersection.addAppearEvent(appearedAnimation)
})
</script>

<template>
  <section id="about">
    <div id="about-background-text">
      <svg viewBox="0 0 500 104">
        <path
          class="cls-1"
          d="m97.2,95.68h25.6L93.95,8.32h-32.42l-28.84,87.37h25.6l5.05-16.72h28.81l5.05,16.72Zm-28.5-34.47l8.71-28.84h.68l8.71,28.84h-18.09Z"
        />
        <path
          class="cls-1"
          d="m131.21,95.68V8.32h37.88c6.66,0,12.24.9,16.77,2.69,4.55,1.79,7.98,4.32,10.28,7.59,2.33,3.27,3.5,7.12,3.5,11.56,0,3.21-.71,6.14-2.13,8.79-1.39,2.64-3.36,4.86-5.89,6.66-2.53,1.76-5.49,2.99-8.87,3.67v.85c3.75.14,7.17,1.1,10.24,2.86,3.07,1.73,5.52,4.14,7.34,7.21,1.82,3.04,2.73,6.63,2.73,10.75,0,4.78-1.25,9.03-3.75,12.76-2.47,3.73-6,6.65-10.58,8.79-4.58,2.13-10.04,3.2-16.38,3.2h-41.12Zm23.72-18.94h11.09c3.98,0,6.97-.74,8.96-2.22,1.99-1.51,2.99-3.73,2.99-6.66,0-2.05-.47-3.78-1.41-5.2-.94-1.42-2.28-2.5-4.01-3.24-1.71-.74-3.77-1.11-6.19-1.11h-11.43v18.43Zm0-33.1h9.73c2.08,0,3.91-.33,5.5-.98,1.59-.65,2.83-1.59,3.71-2.82.91-1.25,1.36-2.77,1.36-4.56,0-2.7-.97-4.76-2.9-6.19-1.93-1.45-4.38-2.18-7.34-2.18h-10.07v16.72Z"
        />
        <path
          class="cls-1"
          d="m296.09,52c0,9.73-1.89,17.93-5.67,24.62-3.78,6.65-8.89,11.7-15.32,15.14-6.43,3.41-13.59,5.12-21.5,5.12s-15.16-1.72-21.59-5.16c-6.4-3.47-11.49-8.53-15.27-15.19-3.75-6.68-5.63-14.86-5.63-24.53s1.88-17.92,5.63-24.57c3.78-6.68,8.87-11.73,15.27-15.14,6.43-3.44,13.62-5.16,21.59-5.16s15.07,1.72,21.5,5.16c6.43,3.41,11.53,8.46,15.32,15.14,3.78,6.66,5.67,14.85,5.67,24.57Zm-24.4,0c0-5.23-.7-9.64-2.09-13.22-1.37-3.61-3.4-6.34-6.1-8.19-2.67-1.88-5.97-2.82-9.9-2.82s-7.24.94-9.94,2.82c-2.67,1.85-4.71,4.58-6.1,8.19-1.37,3.58-2.05,7.99-2.05,13.22s.68,9.66,2.05,13.27c1.39,3.58,3.43,6.31,6.1,8.19,2.7,1.85,6.02,2.77,9.94,2.77s7.22-.92,9.9-2.77c2.7-1.88,4.74-4.61,6.1-8.19,1.39-3.61,2.09-8.03,2.09-13.27Z"
        />
        <path
          class="cls-1"
          d="m358.77,8.32h23.72v55.97c0,6.66-1.59,12.41-4.78,17.28-3.16,4.84-7.57,8.58-13.22,11.22-5.66,2.62-12.23,3.93-19.71,3.93s-14.13-1.31-19.79-3.93c-5.66-2.64-10.07-6.38-13.22-11.22-3.13-4.86-4.69-10.62-4.69-17.28V8.32h23.72v53.92c0,2.7.6,5.12,1.79,7.25,1.19,2.1,2.84,3.75,4.95,4.95,2.13,1.19,4.55,1.79,7.25,1.79s5.15-.6,7.25-1.79c2.1-1.19,3.75-2.84,4.95-4.95,1.19-2.13,1.79-4.55,1.79-7.25V8.32Z"
        />
        <polygon
          class="cls-1"
          points="391.37 8.32 391.37 27.43 417.65 27.43 417.65 95.68 441.03 95.68 441.03 27.43 467.31 27.43 467.31 8.32 391.37 8.32"
        />
      </svg>
    </div>
    <div class="about-contents">
      <div class="about-picture">
        <img id="about-picture-img" src="img/index/about.png" alt="about-img" />
        <div class="about-picture-bg"></div>
      </div>
      <div id="about-title-mobile">
        <h2>Who I Am?</h2>
      </div>
      <div class="about-container">
        <div id="about-title-desktop">
          <h2>Who I Am?</h2>
        </div>
        <p class="about-description">
          ここのえ(Kokonoe)です。<br />
          Unityを使ったソフトウェア開発、Webのフロントエンドなどを中心に行っています。たまにバックエンドも。<br />
          その他にデザイン関係や、3Dモデリングなど幅広くやってます。<br />
          <br />
          趣味はゲーム, DTM, DJ。一番好きなdistroはArch。
        </p>
        <div class="about-skills">
          <div class="skills-title">SKILLS</div>
          <div class="skills-box">
            <p class="skill-box-info">plz click/tap.</p>
            <div class="skill-icons">
              <div v-for="skill of skills" :key="skill.title" class="skill" @click="onClickIcon(skill)">
                <font-awesome-icon
                  v-if="skill.faIcon !== undefined"
                  :icon="skill.faIcon"
                  class="skill-icon"
                  :style="skill.style"
                />
                <img v-else class="skill-icon" :src="skill.iconSrc" :alt="skill.title" />
              </div>
            </div>

            <div id="skill-info-box" :class="{ open: info.isOpen }">
              <div id="skill-info-box-inner">
                <div class="header">
                  <font-awesome-icon
                    v-if="info.skill.faIcon !== undefined"
                    :icon="info.skill.faIcon"
                    class="icon"
                    :style="info.skill.style"
                  />
                  <img v-else class="icon" :src="info.skill.iconSrc" :alt="info.skill.title" />
                  <span class="title">{{ info.skill.title }}</span>
                  <div class="gauge">
                    <div class="gauge-title">Lv.{{ info.skill.level }}</div>
                    <div class="bar">
                      <div id="skill-info-bar-value"></div>
                    </div>
                  </div>
                </div>
                <div class="description">{{ info.skill.description }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
#about
  @apply relative w-full overflow-x-hidden
  @apply mt-10
  @apply md:mt-20 xl:py-20

  #about-background-text
    @apply absolute top-0 h-fit -z-10
    @apply w-full -right-8
    @apply md:w-5/6 md:-right-20

    svg
      .cls-1
        @apply fill-[rgba(0,0,0,0)] stroke-[#D9D9D9]
        @apply stroke-[4px]
        @apply md:stroke-[2px]
        stroke-linejoin: round
        stroke-linecap: round

  .about-contents
    @apply flex flex-wrap
    @apply px-3 my-10 items-end
    @apply md:px-5 md:my-[10vh]
    @apply lg:px-20 lg:my-[12vh] mx-auto max-w-[1400px] md:items-start

    .about-picture
      @apply relative w-[40%] overflow-visible
      @apply h-[27vh]
      @apply md:h-[500px] xl:w-[30%]

      #about-picture-img
        @apply object-cover w-full h-full
        clip-path: polygon(0% 10%, 0% 100%, 100% 90%, 100% 0%)

      .about-picture-bg
        @apply absolute w-full h-full bg-[#7D7D7D] -z-10
        @apply top-[10px] left-[10px]
        @apply md:top-[20px] md:left-[20px]
        clip-path: polygon(0% 10%, 0% 100%, 100% 90%, 100% 0%)

    #about-title-mobile
      @apply md:hidden text-center w-[60%] font-mplus font-black text-[1.8rem] mb-14

    .about-container
      @apply font-mplus w-full @container
      @apply max-md:px-3 mt-5 text-sm
      @apply md:w-[60%] md:mt-20 md:pl-12 md:text-base xl:ml-auto

      #about-title-desktop
        @apply max-md:hidden flex items-center w-full font-black text-[2.5rem] border-l-[10px] pb-2 mb-10

        h2
          @apply pl-8 leading-none

      .about-description
        @apply pt-4
        @apply @md:pt-0 @md:pl-6 @md:text-lg

      .about-skills
        @apply w-full mt-2
        @apply @sm:pl-3 @sm:mt-5

        .skills-title
          @apply w-full text-right font-inter font-black text-xl text-gray

        .skills-box
          @apply border-2 rounded-xl border-gray px-5 py-2

          .skill-box-info
            @apply text-gray font-inter border-b border-dashed

          .skill-icons
            @apply grid mt-4
            @apply grid-cols-6 gap-2
            @apply @md:grid-cols-10

            .skill
              @apply inline-block m-auto w-[28px] h-[28px]

              .skill-icon
                @apply text-[28px] w-[28px] h-[28px]

          #skill-info-box
            @apply mt-3 h-0 bg-gray rounded-xl
            @apply overflow-hidden

            #skill-info-box-inner
              @apply w-full p-2

              .header
                @apply px-2 flex flex-wrap items-center mb-2 pb-2 border-b

                .icon
                  @apply text-[24px] min-w-[24px] mr-3 w-[24px] h-[24px]

                .title
                  @apply text-lg font-bold leading-none py-1

                .gauge
                  @apply inline-flex min-w-[120px]
                  @apply max-md:w-full max-md:my-2
                  @apply md:w-1/4 text-right md:ml-auto

                  .gauge-title
                    @apply text-sm mr-2

                  .bar
                    @apply w-full border border-primary overflow-hidden

                    #skill-info-bar-value
                      @apply bg-primary w-0 h-full

              .description
                @apply text-sm
                @apply px-2 py-2
                @apply md:px-8
</style>
