import { http, HttpResponse } from 'msw'
import { allCategoriesData } from '@/mockData/categories/allCategoriesData'

export const getAllCategoriesHandler = () => {
  return http.get('/api/categories', () => {
    return HttpResponse.json(
      allCategoriesData
    )
  })
}
