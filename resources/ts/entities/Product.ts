export interface Product {
  title: string
  subtitle: string
  description: string
  image: string
}

export const Products: Product[] = [
  {
    title: 'Streameme',
    subtitle: 'VTuber配信システム',
    description:
      'JINS MEMEを使ってVRMモデルを動かすことができる、VTuber向けの配信支援システムです。グリーンバック・ブルーバック背景にできるためOBSと合わせて使用可能。リップシンクもあります。\n近日中にVMCProtocolも対応予定。',
    image: '/img/index/products/streameme.png',
  },
  {
    title: 'Others',
    subtitle: 'その他',
    description: 'その他のプロダクトはGithubから。',
    image: '/img/index/products/others.png',
  },
]
