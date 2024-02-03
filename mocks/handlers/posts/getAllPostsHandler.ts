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
        },
        {
          id: 2,
          title: 'title2',
          body: 'body2',
        },
        {
          id: 3,
          title: 'title3',
          body: 'body3',
        }
      ]
    )
  })
}
