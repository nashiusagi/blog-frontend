import { PostSummary } from '@/types/api'

export const allPostSummariesData: PostSummary[] =
[
  {
    id: 1,
    title: '風呂掃除',
    thumbnail_path: '..//public/sample.png',
    category: {
      id: 1,
      name: '生活',
    },
    tags: [
      {
        id: 1,
        name: '掃除',
      }
    ],
  },
  {
    id: 2,
    title: 'Nuxt Icon',
    category: {
      id: 3,
      name: 'フロントエンド',
    },
    tags: [
      {
        id: 2,
        name: 'Vue3',
      },
      {
        id: 4,
        name: 'Nuxt3',
      }
    ],
  },
  {
    id: 3,
    title: 'バックエンドとは',
    category: {
      id: 4,
      name: 'バックエンド',
    },
    tags: [],
  }
]
