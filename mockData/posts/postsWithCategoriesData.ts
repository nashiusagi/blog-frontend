import { PostsWithCategory } from '@/types/api'

export const postsWithCategoryData: PostsWithCategory = {
  posts: [{
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
  }
  ],
  category: {
    id: 1,
    name: '生活',
  },
}
