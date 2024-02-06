import { http, HttpResponse } from 'msw'
import { postsWithCategoryData } from '@/mockData/posts/postsWithCategoriesData'

export const getPostWithCategoryHandler = () => {
  return http.get('/api/categories/:id', () => {
    return HttpResponse.json(
      postsWithCategoryData
    )
  })
}
