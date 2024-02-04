import { http, HttpResponse } from 'msw'
import { allPostSummariesData } from '@/mockData/posts/allPostSummariesData'

export const getAllPostsHandler = () => {
  return http.get('/api/posts', () => {
    return HttpResponse.json(
      allPostSummariesData
    )
  })
}
