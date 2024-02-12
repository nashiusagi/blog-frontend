// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { addLinkAttribute } from '@/composables/markdown/addLinkAttribute'

describe('addLinkAttribute test', () => {
  test('正常に値が追加される', () => {
    let value = 'test'

    value = addLinkAttribute(value)

    expect(value).toBe('test[title](link)')
  })
})
