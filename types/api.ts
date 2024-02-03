export interface Post {
  id: number;
  title: string;
  body: string;
  thumbnail_path?: string;
  created_time: string;
  updated_time: string;
  deleted_time: string;
}

export type PostSummary = Pick<Post, 'id' | 'title' | 'body' | 'thumbnail_path'>
