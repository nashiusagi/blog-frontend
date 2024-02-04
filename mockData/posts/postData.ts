import dayjs from 'dayjs'
import { Post } from '@/types/api'

export const postData: Post = {
  id: 1,
  title: 'title1',
  body: 'body1',
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
  created_time: dayjs().format(),
  updated_time: dayjs().format(),
  deleted_time: dayjs().format(),
}
