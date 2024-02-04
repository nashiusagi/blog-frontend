import { http, HttpResponse } from 'msw'
import { postData } from '@/mockData/posts/postData'

export const getPostHandler = () => {
  return http.get('/api/posts/:id', () => {
    return HttpResponse.json(
      postData
    )
  })
}
