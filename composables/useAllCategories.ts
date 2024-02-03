import type { Category } from '@/types/api'

export const useAllCategories = async () => {
  const runtimeConfig = useRuntimeConfig()
  const url = `${runtimeConfig.public.api.url}/api/categories`

  const categoriesData = ref<Category[]>([])
  const pending = ref<boolean>(false)
  const error = ref<string>('')

  try {
    pending.value = true
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    })
    categoriesData.value = (await response.json()) as Category[]
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
    categoriesData,
    pending,
    error,
  }
}
