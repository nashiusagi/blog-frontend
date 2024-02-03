export interface Category {
  id: number;
  name: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  thumbnail_path?: string;
  category: Category;
  tags: Tag[]
  created_time: string;
  updated_time: string;
  deleted_time: string;
}

export type PostSummary = Pick<Post, 'id' | 'title' | 'thumbnail_path' | 'category' | 'tags'>
