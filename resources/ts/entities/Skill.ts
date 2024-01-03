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
    level: 5,
    description: '経験アリ(自作の配信ツール, VRChatのワールド制作, etc...)　最近はECS(DOTS)を研究中です',
    faIcon: ['fab', 'unity'],
  },
  {
    title: 'HTML5',
    level: 5,
    description: '好きなタグは<marquee>です(うそです)',
    iconSrc: 'img/index/brands/HTML5_Logo.svg',
  },
  {
    title: 'CSS3',
    level: 4,
    description: 'すき　CSSは人間には早すぎるので万年修行中ということにしています',
    faIcon: ['fab', 'css3'],
    style: {
      color: '#0088ff',
    },
  },
  {
    title: 'Vue 3',
    level: 4,
    description: 'Webは基本的にVueを使いです、このサイトもVue3。最近はPiniaを併用してます',
    iconSrc: 'img/index/brands/vue.svg',
  },
  {
    title: 'Typescript',
    level: 5,
    description: 'Webフロントの全プロジェクトで採用してます。型が好きすぎる',
    iconSrc: 'img/index/brands/ts-logo-128.svg',
  },
  {
    title: 'Tailwind',
    level: 5,
    description: '高速でデザインを構築できるので気に入ってます',
    iconSrc: 'img/index/brands/tailwindcss.svg',
  },
  {
    title: 'Svelte',
    level: 2,
    description: '試験的にチャットツールのフロントで使用しました。割と嫌いじゃない',
    iconSrc: 'img/index/brands/svelte.svg',
  },
  {
    title: 'Laravel',
    level: 3,
    description: 'ほどほど使えますが、特段詳しいわけではない…',
    iconSrc: 'img/index/brands/laravel.svg',
  },
  {
    title: 'Golang',
    level: 1,
    description: 'gRPCのバックエンド用に最近触り始めた',
    faIcon: ['fab', 'golang'],
  },
  {
    title: 'Java',
    level: 4,
    description: '2018年ぐらいまでメイン言語にしていました。JavaFXがJDKから削除されてしまい、最近は触れてません…',
    faIcon: ['fab', 'java'],
  },
  {
    title: 'Python',
    level: 3,
    description: '各種自動化・ML絡みで使うこともある。使えはするけど、好みではない…',
    iconSrc: 'img/index/brands/python.svg',
  },
  {
    title: 'Linux',
    level: 3,
    description: 'Gentoo Install Battleに勝てる程度の能力',
    faIcon: ['fab', 'linux'],
  },
  {
    title: 'Illustrator',
    level: 5,
    description: 'ポスターデザイン・Webデザイン等々の経験あり。',
    iconSrc: 'img/index/brands/adobe_ai.svg',
  },
  {
    title: 'Photoshop',
    level: 4,
    description: '主に画像修正・バッチ処理に副次的に使ってます。小学生の時から使ってるので18年ぐらい使ってる',
    iconSrc: 'img/index/brands/adobe_ps.svg',
  },
  {
    title: 'InDesign',
    level: 3,
    description: '前職でマニュアルのテンプレートデザインの制作時に使用。',
    iconSrc: 'img/index/brands/adobe_id.svg',
  },
  {
    title: 'Figma',
    level: 3,
    description: 'Adobe Xdがサ終したので乗り換えました。まだあんま慣れてない… プラグイン製作してます',
    iconSrc: 'img/index/brands/figma.svg',
  },
  {
    title: 'Blender',
    level: 3,
    description: '無機物ならモデリングできます　人は… ﾁｮｯﾄﾑｽﾞｶｼｲ',
    iconSrc: 'img/index/brands/blender.png',
  },
]
