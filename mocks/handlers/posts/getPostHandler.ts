import { http, HttpResponse } from "msw"

export const getPostHandler = () => {
  return http.get("/api/posts/:id", ({ params, }) => {
    return HttpResponse.json(
      {
        id: params.id,
        title: `title${params.id}`,
        body: `body${params.id}`,
      }
    )
  })
}
