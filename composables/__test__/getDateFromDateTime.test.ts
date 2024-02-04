// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { getDateFromDateTime } from '@/composables/getDateFromDateTime'

describe('getDateFromDateTimeのテスト', () => {
  test('正常に値を返す', () => {
    const datetime: string = '2024-02-04T12:23:17+09:00'

    const date = getDateFromDateTime(datetime)

    expect(date).toBe('2024-02-04')
  })
})
