import { ApiResponse, BlogPost, BlogPostCategory, GetPostsParams, PaginatedContent } from "@/types"
import { useQuery } from "@tanstack/vue-query"
import axios from "axios"
import type { ComputedRef, Ref } from "vue"

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api",
})

/* fetches all categories */
export const useGetCategories = () => {
  return useQuery<ApiResponse<BlogPostCategory[]>, Error, BlogPostCategory[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await api.get("/categories")
      return data
    },
    retry: 1,
    refetchOnWindowFocus: false,
    select: (data) => data.data,
  })
}

/* fetches all posts - paginated with filters */
export const useGetBlogPosts = (params?: ComputedRef<GetPostsParams> | GetPostsParams) => {
  return useQuery<ApiResponse<PaginatedContent<BlogPost>>, Error, PaginatedContent<BlogPost>>({
    queryKey: ["blogPosts", params],
    queryFn: async () => {
      const queryParams = typeof params === "object" && "value" in params ? params.value : params
      const { data } = await api.get("/posts", {
        params: queryParams,
      })
      return data
    },
    select: (data) => data.data,
  })
}

/* fetches a single post by slug */
export const useGetBlogPostBySlug = (slug: Ref<string> | string) => {
  return useQuery<ApiResponse<BlogPost>, Error, BlogPost>({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      const slugValue = typeof slug === "object" && "value" in slug ? slug.value : slug
      const { data } = await api.get(`/posts/${slugValue}`)
      return data
    },
    enabled: !!slug,
    select: (data) => data.data,
  })
}
