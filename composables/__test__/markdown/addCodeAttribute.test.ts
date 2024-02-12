// @vitest-environment nuxt
import { describe, test, expect } from 'vitest'
import { addCodeAttribute } from '@/composables/markdown/addCodeAttribute'

describe('addCodeAttribute test', () => {
  test('正常に値が追加される', () => {
    let value = 'test'

    value = addCodeAttribute(value)

    expect(value).toBe('test```\n\n```')
  })
})
