import dayjs from 'dayjs'
import { Post } from '@/types/api'

export const postData: Post = {
  id: 1,
  title: '風呂掃除',
  body: '週一回くらいやらないといけないし、週一回やっても足りないことがあるので結構やばい。',
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
  deleted_time: '',
}
