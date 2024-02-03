import { getAllCategoriesHandler } from './handlers/categories/getAllCategoriesHandler'
import { getAllPostsHandler } from './handlers/posts/getAllPostsHandler'
import { getPostHandler } from './handlers/posts/getPostHandler'

export const handlers = [
  getAllPostsHandler(),
  getPostHandler(),
  getAllCategoriesHandler()
]
