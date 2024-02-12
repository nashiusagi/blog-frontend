// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { addListAttribute } from '@/composables/markdown/addListAttribute'

describe('addListAttribute test', () => {
  test('正常に値が追加される', () => {
    let value = 'test'

    value = addListAttribute(value)

    expect(value).toBe('test\n * ')
  })
})
