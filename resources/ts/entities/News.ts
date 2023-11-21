export interface News {
  type: 'notice' | 'event' | 'release'
  date: Date
  texts: NewsText[]
}

export interface NewsText {
  text: string // 内容
  utils?: string // Tailwind class
  line?: boolean // 改行
  link?: string // <a href
}

export const NewsData: News[] = [
  {
    type: 'notice',
    date: new Date(2023, 11, 1),
    texts: [
      {
        text: 'QiitaでAdvent Calendar 2023に参加しています。',
        line: true,
      },
      {
        text: 'カレンダーは ',
      },
      {
        text: 'こちら',
        link: 'https://qiita.com/advent-calendar/2023/99no_exit',
      },
      {
        text: ' 。',
      },
    ],
  },
  {
    type: 'notice',
    date: new Date(2023, 11, 1),
    texts: [
      {
        text: 'QiitaでAdvent Calendar 2023に参加しています。',
      },
    ],
  },
]
