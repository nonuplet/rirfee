export interface SocialLink {
  title: string
  css: string
  href: string
}

export const SocialLinks: SocialLink[] = [
  {
    title: 'Bluesky',
    css: 'bluesky',
    href: 'https://bsky.app/profile/nonuplet.bsky.social',
  },
  {
    title: 'Blog',
    css: 'blog',
    href: '/blog',
  },
  {
    title: 'Twitter',
    css: 'twitter',
    href: 'https://twitter.com/99no_exit',
  },
  {
    title: 'Github',
    css: 'github',
    href: 'https://github.com/nonuplet',
  },
  {
    title: 'Zenn',
    css: 'zenn',
    href: 'https://zenn.dev/99no_exit',
  },
  {
    title: 'Qiita',
    css: 'qiita',
    href: 'https://qiita.com/99no_exit',
  },
]
