// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { addItalicAttribute } from '@/composables/markdown/addItalicAttribute'

describe('addItalicAttribute test', () => {
  test('正常に値が追加される', () => {
    let value = 'test'

    value = addItalicAttribute(value)

    expect(value).toBe('test**')
  })
})
