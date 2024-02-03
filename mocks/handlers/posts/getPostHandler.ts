import dayjs from 'dayjs'
import { http, HttpResponse } from 'msw'

export const getPostHandler = () => {
  return http.get('/api/posts/:id', ({ params, }) => {
    return HttpResponse.json(
      {
        id: params.id,
        title: `title${params.id}`,
        body: `body${params.id}`,
        thumbnail_path: '..//public/sample.png',
        created_time: dayjs().format(),
        updated_time: dayjs().format(),
        deleted_time: dayjs().format(),
      }
    )
  })
}
