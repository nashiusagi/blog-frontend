// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { addNumberListAttribute } from '@/composables/markdown/addNumberListAttribute'

describe('addNumberListAttribute test', () => {
  test('正常に値が追加される', () => {
    let value = 'test'

    value = addNumberListAttribute(value)

    expect(value).toBe('test\n 1. ')
  })
})
