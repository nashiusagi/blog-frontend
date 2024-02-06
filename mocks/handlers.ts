import { getAllCategoriesHandler } from './handlers/categories/getAllCategoriesHandler'
import { getAllPostsHandler } from './handlers/posts/getAllPostsHandler'
import { getPostHandler } from './handlers/posts/getPostHandler'
import { getPostWithCategoryHandler } from './handlers/posts/getPostsWithCategory'

export const handlers = [
  getAllPostsHandler(),
  getPostHandler(),
  getAllCategoriesHandler(),
  getPostWithCategoryHandler()
]
