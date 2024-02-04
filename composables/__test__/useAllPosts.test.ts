// @vitest-environment nuxt
import { describe, test, expect, vi } from 'vitest'
import { useAllPosts } from '@/composables/useAllPosts'
import { allPostSummariesData } from '@/mockData/posts/allPostSummariesData'

describe('useAllPost test', () => {
  test('正常にデータを取得できる', async () => {
    const mockData = allPostSummariesData

    const spy = vi.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify(mockData)))

    const { data, pending, error, } = await useAllPosts()

    expect(data.value.length).toBe(3)
    expect(pending.value).toBeFalsy()
    expect(error.value).toBe('')

    spy.mockRestore()
  })

  test('失敗時はエラーを返す', async () => {
    const { data, pending, error, } = await useAllPosts()

    expect(data.value.length).toBe(0)
    expect(pending.value).toBeFalsy()
    expect(error.value.length).toBeGreaterThan(0)
  })
})
