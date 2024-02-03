// @vitest-environment nuxt
import { describe, test, expect, vi } from 'vitest'
import { useAllPosts } from '@/composables/useAllPosts'

describe('useAllPost test', () => {
  test('正常にデータを取得できる', async () => {
    const mockData = [
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
