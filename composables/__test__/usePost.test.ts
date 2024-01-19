// @vitest-environment nuxt
import { describe, expect, test, vi } from 'vitest'
import { usePost } from '@/composables/usePost'

describe('usePost test', () => {
  test('正常にデータを取得できる', async () => {
    const mockData = {
      id: 1,
      title: 'title1',
      body: 'body1',
    }

    const spy = vi.spyOn(global, 'fetch').mockResolvedValue(new Response(JSON.stringify(mockData)))

    const { data, pending, error, } = await usePost(1)

    expect(data.id).toBe(1)
    expect(pending.value).toBeFalsy()
    expect(error.value).toBe('')

    spy.mockRestore()
  })

  test('ふさわしくないidを入れたときはエラーを返す', async () => {
    const { data, pending, error, } = await usePost(-1)

    expect(data.id).toBe(-1)
    expect(data.title).toBe('')
    expect(data.body).toBe('')
    expect(pending.value).toBeFalsy()
    expect(error.value).toBe('input id is wrong.')
  })

  test('失敗時はエラーを返す', async () => {
    const { data, pending, error, } = await usePost(1)

    expect(data.id).toBe(-1)
    expect(pending.value).toBeFalsy()
    expect(error.value.length).toBeGreaterThan(0)
  })
})
