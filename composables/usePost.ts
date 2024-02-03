import dayjs from 'dayjs'
import type { Category, Post, Tag } from '@/types/api'

export const usePost = async (id: number) => {
  if (id < 0) {
    return {
      data: reactive<Post>({
        id: -1,
        title: '',
        body: '',
        thumbnail_path: '',
        category: {} as Category,
        tags: [] as Tag[],
        created_time: dayjs().format(),
        updated_time: dayjs().format(),
        deleted_time: dayjs().format(),
      }),
      pending: ref<boolean>(false),
      error: ref<string>('input id is wrong.'),
    }
  }

  const runtimeConfig = useRuntimeConfig()
  const url = `${runtimeConfig.public.api.url}/api/posts/${id}`

  const data = reactive<Post>({
    id: -1,
    title: '',
    body: '',
    thumbnail_path: '',
    category: {} as Category,
    tags: [] as Tag[],
    created_time: dayjs().format(),
    updated_time: dayjs().format(),
    deleted_time: dayjs().format(),
  })
  const pending = ref<boolean>(false)
  const error = ref<string>('')

  try {
    pending.value = true
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
    })
    const responseJson = await response.json()
    Object.assign(data, responseJson)
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
