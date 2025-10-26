<script setup lang="ts">
interface BlogCardSkeletonProps {
  /** The display variant of the skeleton
   * - "portrait": Image on top, text below (default)
   * - "landscape": Image on left, text on right
   * @default "portrait"
   */
  variant?: "portrait" | "landscape"
  /** Optional additional classes */
  class?: string
}

const props = withDefaults(defineProps<BlogCardSkeletonProps>(), {
  variant: "portrait",
})
</script>

<template>
  <article
    class="animate-pulse overflow-hidden"
    :class="[
      {
        'flex flex-col': variant === 'portrait',
        'flex flex-row items-center': variant === 'landscape',
      },
      props.class,
    ]"
  >
    <!-- Image Skeleton -->
    <div
      class="bg-background-alt rounded-2xl"
      :class="{
        'mb-3 h-48 w-full': variant === 'portrait',
        'h-28 w-28 flex-shrink-0': variant === 'landscape',
      }"
    ></div>

    <!-- Text Skeleton -->
    <div
      :class="{
        'flex-1 px-3': variant === 'landscape',
        'flex flex-col items-start px-2': variant === 'portrait',
      }"
    >
      <!-- Category pill -->
      <div class="bg-background-alt mb-2 h-5 w-20 rounded-full"></div>

      <!-- Title lines -->
      <div
        class="bg-background-alt rounded"
        :class="{
          'mb-2 h-5 w-3/4': variant === 'portrait',
          'mb-1 h-4 w-2/3': variant === 'landscape',
        }"
      ></div>
      <div
        class="bg-background-alt rounded"
        :class="{
          'mb-2 h-5 w-2/4': variant === 'portrait',
          'mb-2 h-4 w-1/2': variant === 'landscape',
        }"
      ></div>

      <!-- Date -->
      <div class="bg-background-alt mb-2 h-3 w-16 rounded"></div>
    </div>
  </article>
</template>
