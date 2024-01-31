export interface Product {
  title: string
  subtitle: string
  description: string
  image: string
  link: string
}

export const Products: Product[] = [
  {
    title: 'MagicaPly-Blender',
    subtitle: 'Blender add-on for Voxel Model',
    description:
      'MagicaVoxelから出力した.plyモデルを、自動でいい感じにして使いやすくするアドオン。頂点カラー→テクスチャへのベイク処理や頂点数の削減など自動で行います。',
    image: 'img/index/products/magicaply.png',
    link: 'https://github.com/nonuplet/MagicaPly-Blender',
  },
  {
    title: 'Streameme',
    subtitle: 'VTuber配信システム',
    description:
      'JINS MEMEを使ってVRMモデルを動かすことができる、VTuber向けの配信支援システムです。グリーン/ブルーバック背景にできるためOBSと合わせて使用可能。リップシンクもあります。\n近日中にVMCProtocolも対応予定。',
    image: 'img/index/products/streameme.png',
    link: 'https://github.com/nonuplet/streameme',
  },
  {
    title: 'discord-rigate',
    subtitle: 'Discord RSS Feeder',
    description:
      'RSSフィードに基づいて、24時間以内のポストをDiscordに投稿するユーティリティ。DiscordのOGP・文字数制限等の仕様に沿って設計しているため、読みやすく表示されます。',
    image: 'img/index/products/rigate.png',
    link: 'https://github.com/nonuplet/discord-rigate',
  },
  {
    title: 'FileOverwriter',
    subtitle: 'Unity エディタ拡張',
    description:
      'エディタ上でファイルの上書きができるようになるエディタ拡張です。差分も確認可能です。Inspector上の参照をそのままに、画像・モデル等の差し替えができます。VRChatのアバター改変用途にもオススメ。',
    image: 'img/index/products/fileoverwriter.png',
    link: 'https://github.com/nonuplet/fileoverwriter',
  },
]
