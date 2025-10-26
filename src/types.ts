export interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  category: number
  category_name: string
  cover_image?: string
  created_at: Date
  updated_at: Date
}

export interface BlogPostCategory {
  id: number
  name: string
  slug: string
  description?: string
  posts?: number[]
}

export interface GetPostsParams {
  page?: number
  limit?: number
  category?: string
  search?: string
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface PaginationMeta {
  page: number
  limit: number
  total_items: number
  total_pages: number
}

export interface PaginatedContent<T> {
  items: T[]
  meta: PaginationMeta
}
