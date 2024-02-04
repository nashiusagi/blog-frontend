import { PostSummary } from '@/types/api'

export const allPostSummariesData: PostSummary[] =
[
  {
    id: 1,
    title: 'title1',
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
    title: 'title2',
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
    title: 'title3',
    category: {
      id: 4,
      name: 'バックエンド',
    },
    tags: [],
  }
]
