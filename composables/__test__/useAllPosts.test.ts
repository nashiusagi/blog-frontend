// @vitest-environment nuxt
import { describe, test, expect, vi } from "vitest"
import { useAllPosts } from "@/composables/useAllPosts"

describe("useAllPost test", () => {
  test("正常にデータを取得できる", async () => {
    const mockData = [
      {
        id: 1,
        title: "title1",
        body: "body1",
      },
      {
        id: 2,
        title: "title2",
        body: "body2",
      },
      {
        id: 3,
        title: "title3",
        body: "body3",
      }
    ]

    const spy = vi.spyOn(global, "fetch").mockResolvedValue(new Response(JSON.stringify(mockData)))

    const { data, pending, } = await useAllPosts()

    expect(data.value.length).toBe(3)
    expect(pending.value).toBeFalsy()

    spy.mockRestore()
  })
})
