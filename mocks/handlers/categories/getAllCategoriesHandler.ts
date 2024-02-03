import { http, HttpResponse } from 'msw'

export const getAllCategoriesHandler = () => {
  return http.get('/api/categories', () => {
    return HttpResponse.json(
      [
        {
          id: 1,
          name: '生活',
        },
        {
          id: 2,
          name: 'コラム',
        },
        {
          id: 3,
          name: 'フロントエンド',
        },
        {
          id: 4,
          name: 'バックエンド',
        },
        {
          id: 5,
          name: 'マネジメント',
        },
        {
          id: 6,
          name: '画像処理',
        }
      ]
    )
  })
}
