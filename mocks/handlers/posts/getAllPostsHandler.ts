import { http, HttpResponse } from 'msw'

export const getAllPostsHandler = () => {
  return http.get('/api/posts', () => {
    return HttpResponse.json(
      [
        {
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
        },
        {
          id: 2,
          title: 'title2',
          body: 'body2',
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
          body: 'body3',
          category: {
            id: 4,
            name: 'バックエンド',
          },
          tags: [],
        }
      ]
    )
  })
}
