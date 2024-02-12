// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { addBoldAttribute } from '@/composables/markdown/addBoldAttribute'

describe('addBoldAttribute test', () => {
  test('正常に値が追加される', () => {
    let value = 'test'

    value = addBoldAttribute(value)

    expect(value).toBe('test****')
  })
})
