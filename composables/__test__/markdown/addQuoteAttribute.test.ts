// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { addQuoteAttribute } from '@/composables/markdown/addQuoteAttribute'

describe('addQuoteAttribute test', () => {
  test('正常に値が追加される', () => {
    let value = 'test'

    value = addQuoteAttribute(value)

    expect(value).toBe('test> ')
  })
})
