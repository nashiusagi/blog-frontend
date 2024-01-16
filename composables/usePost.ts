import type { Post } from "@/types/api"

export const usePost = async (id: number) => {
  if (id < 0) {
    return {
      data: -1,
      pending: false,
      error: "input id is wrong.",
    }
  }

  const runtimeConfig = useRuntimeConfig()
  const url = `${runtimeConfig.public.api.url}/api/posts/${id}`

  const data = reactive<Post>({
    id: -1,
    title: "",
    body: "",
  })
  const pending = ref<boolean>(false)
  const error = ref<string>("")

  try {
    pending.value = true
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
    })
    const responseJson = await response.json()
    Object.assign(data, responseJson)
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message
    } else {
      error.value = "something went wrong!"
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
