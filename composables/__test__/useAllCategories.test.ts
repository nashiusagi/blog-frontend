// @vitest-environment nuxt
import { describe, test, expect, vi } from 'vitest'
import { useAllCategories } from '../useAllCategories'

describe('useAllCategories test', () => {
  test('正常にデータを取得できる', async () => {
    const mockData = [
      {
        id: 1,
        name: '生活',
      },
      {
        id: 2,
        name: 'コラム',
      }
    ]

    const spy = vi.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify(mockData)))

    const { categoriesData, pending, error, } = await useAllCategories()

    expect(categoriesData.value.length).toBe(2)
    expect(pending.value).toBeFalsy()
    expect(error.value).toBe('')

    spy.mockRestore()
  })

  test('失敗時はエラーを返す', async () => {
    const { categoriesData, pending, error, } = await useAllCategories()

    expect(categoriesData.value.length).toBe(0)
    expect(pending.value).toBeFalsy()
    expect(error.value.length).toBeGreaterThan(0)
  })
})
