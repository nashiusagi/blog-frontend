import type { PostsWithCategory } from '@/types/api'

export const usePostsFilteredByCategory = async (id: number) => {
  const runtimeConfig = useRuntimeConfig()
  const url = `${runtimeConfig.public.api.url}/api/categories/${id}`

  const postsDataFilteredByCategory = ref<PostsWithCategory>({} as PostsWithCategory)
  const pending = ref<boolean>(false)
  const error = ref<string>('')

  try {
    pending.value = true
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    })
    postsDataFilteredByCategory.value = (await response.json())
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message
    } else {
      error.value = 'something went wrong!'
    }
  } finally {
    pending.value = false
  }

  return {
    postsDataFilteredByCategory,
    pending,
    error,
  }
}
