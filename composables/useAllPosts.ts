import type { PostSummary } from '@/types/api'

export const useAllPosts = async () => {
  const runtimeConfig = useRuntimeConfig()
  const url = `${runtimeConfig.public.api.url}/api/posts`

  const data = ref<PostSummary[]>([])
  const pending = ref<boolean>(false)
  const error = ref<string>('')

  try {
    pending.value = true
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    })
    data.value = (await response.json()) as PostSummary[]
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
    data,
    pending,
    error,
  }
}
