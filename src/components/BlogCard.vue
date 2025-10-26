<script setup lang="ts">
import { BlogPost } from "@/types"

interface BlogCardProps {
  /** The blog post data */
  post: BlogPost
  /** The display variant of the card
   * - "portrait": Image on top, text below (default)
   * - "landscape": Image on left, text on right
   * @default "portrait"
   */
  variant?: "portrait" | "landscape"
  /** Additional custom classes */
  class?: string
}

const props = withDefaults(defineProps<BlogCardProps>(), {
  variant: "portrait",
})
</script>

<template>
  <article
    class="overflow-hidden"
    :class="[
      {
        'flex flex-col': variant === 'portrait',
        'flex flex-row items-center': variant === 'landscape',
      },
      props.class,
    ]"
  >
    <!-- Image Section -->
    <div
      class="bg-background-alt cursor-pointer rounded-2xl"
      :class="{
        'mb-3 h-48 w-full': variant === 'portrait',
        'h-28 w-28 flex-shrink-0': variant === 'landscape',
      }"
      @click="$router.push(`/blog/${post.slug}`)"
    >
      <img
        v-if="post.cover_image"
        :src="post.cover_image"
        :alt="post.title"
        class="h-full w-full rounded-2xl object-cover"
      />
    </div>

    <!-- Content Section -->
    <div
      :class="{
        'flex-1 px-3': variant === 'landscape',
        'flex flex-col items-start px-2': variant === 'portrait',
      }"
    >
      <span
        class="bg-background-alt mb-2 inline-block cursor-pointer rounded-full px-3 py-1 text-xs"
        @click="
          $router.push(`/blog?category=${post.category_name?.replace(/\s+/g, '-').toLowerCase()}`)
        "
      >
        {{ post.category_name }}
      </span>
      <router-link :to="`/blog/${post.slug}`">
        <h3
          class="font-semibold text-gray-900"
          :class="{
            'mb-2 line-clamp-2 text-xl': variant === 'portrait',
            'line-clamp-2 text-base': variant === 'landscape',
          }"
        >
          {{ post.title }}
        </h3>
      </router-link>
      <span class="text-sm">
        {{ new Date(post.created_at).toLocaleString("en-US", { dateStyle: "medium" }) }}
      </span>
      <router-link
        v-if="variant === 'portrait'"
        :to="`/blog/${post.slug}`"
        class="text-primary hover:text-primary-dark mt-2 font-medium transition-all hover:underline"
      >
        Read More →
      </router-link>
    </div>
  </article>
</template>
