// @vitest-environment nuxt
import { describe, test, expect } from "vitest"
import { useAllPosts } from "../useAllPosts"

describe("useAllPost test", () => {
  test("", () => {
    const pending = useAllPosts()

    expect(pending).toBeTruthy()
  })
})
