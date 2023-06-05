export interface Skill {
  title: string
  level: number
  description: string
  faIcon?: string[]
  iconSrc?: string
  style?
}
export const Skills: Skill[] = [
  {
    title: 'Unity & C#',
    level: 4,
    description:
      '自作の配信ツールやVRChatのワールド制作などでそれなりに経験アリ　時間的には一番費やしていますが奥が深すぎて一生マスターできる気がしません',
    faIcon: ['fab', 'unity'],
  },
  {
    title: 'HTML5',
    level: 5,
    description: '普通に使えます',
    iconSrc: 'img/index/brands/HTML5_Logo.svg',
  },
  {
    title: 'CSS3',
    level: 3,
    description: 'CSSは人間には早すぎるので万年修行中ということにしています',
    faIcon: ['fab', 'css3'],
    style: {
      color: '#0088ff',
    },
  },
  {
    title: 'Vue 3',
    level: 4,
    description: '結構頻繁に使っています、このサイトもVue3　最近はStoreライブラリにPiniaを使うことが多いです',
    iconSrc: 'img/index/brands/vue.svg',
  },
  {
    title: 'Typescript',
    level: 5,
    description: 'Web Frontendの技術で最も愛している　もう生のJSはほとんど書いてません',
    iconSrc: 'img/index/brands/ts-logo-128.svg',
  },
  {
    title: 'Tailwind',
    level: 4,
    description: '開発体験がよい　最近は頻繁に使っています',
    iconSrc: 'img/index/brands/tailwindcss.svg',
  },
  {
    title: 'Laravel',
    level: 3,
    description: 'ほどほど使えますが特段詳しいわけではないです',
    iconSrc: 'img/index/brands/laravel.svg',
  },
  {
    title: 'Linux',
    level: 3,
    description: 'Gentoo Install Battleに勝てる程度の能力',
    faIcon: ['fab', 'linux'],
  },
]
