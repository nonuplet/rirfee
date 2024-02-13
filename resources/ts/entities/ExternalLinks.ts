interface ExternalLink {
  name: string
  sns_id: string
  href: string
  faIcon?: string[]
  faIconStyle?
  imgSrc?: string
}

export const ExternalLinks: ExternalLink[] = [
  {
    name: 'Bluesky (Main SNS)',
    sns_id: '@rirfee.com',
    href: 'https://bsky.app/profile/rirfee.com',
    imgSrc: '/img/index/brands/bsky_blue.svg',
  },
  {
    name: 'Github',
    sns_id: 'nonuplet',
    href: 'https://github.com/nonuplet',
    faIcon: ['fab', 'github'],
  },
  {
    name: 'Blog',
    sns_id: 'http://rirfee.com/blog',
    href: 'http://rirfee.com/blog',
    faIcon: ['fas', 'square-pen'],
    faIconStyle: {
      color: 'orange',
    },
  },
  {
    name: 'Zenn',
    sns_id: '@99no_exit',
    href: 'https://zenn.dev/99no_exit',
    imgSrc: '/img/index/brands/zenn-logo.svg',
  },
  {
    name: 'Qiita',
    sns_id: '@99no_exit',
    href: 'https://qiita.com/99no_exit',
    imgSrc: '/img/index/brands/qiita-logo.png',
  },
]
