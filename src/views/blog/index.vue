<script setup lang="ts">
import { useGetBlogPosts, useGetCategories } from "@/composables/api"
import AppButton from "@components/AppButton.vue"
import AppSection from "@components/AppSection.vue"
import BlogCard from "@components/BlogCard.vue"
import BlogCardSkeleton from "@components/BlogCardSkeleton.vue"
import SectionHeader from "@components/SectionHeader.vue"
import { Icon } from "@iconify/vue"
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const { data: categories } = useGetCategories()
const router = useRouter()
const route = useRoute()

const selectedCategory = ref((route.query.category as string) || "")
const page = ref(1)

const handleSelectCategory = (event: Event) => {
  const category = (event.target as HTMLSelectElement).value
  if (category) {
    router.push({ query: { category } })
  } else {
    router.push({ query: {} })
  }
}

watch(
  () => route.query.category,
  (newCategory) => {
    selectedCategory.value = (newCategory as string) || ""
  },
  { immediate: true },
)

const combinedParams = computed(() => ({
  page: page.value,
  limit: 20,
  ...(selectedCategory.value ? { category: selectedCategory.value } : {}),
}))

const { data: posts, isLoading } = useGetBlogPosts(combinedParams)

const fullCategory = computed(() => {
  return categories.value?.find((cat) => cat.slug === selectedCategory.value)
})
</script>

<template>
  <div>
    <AppSection class="!pt-10">
      <div class="mb-6 flex justify-center">
        <SectionHeader
          :title="selectedCategory ? `Blog - ${fullCategory?.name}` : 'All Blog Posts'"
          :subtitle="
            selectedCategory
              ? fullCategory?.description
              : 'Wholesome contents sorted from newest to oldest.'
          "
          size="lg"
          class="max-w-2xl text-center"
        />
      </div>
      <div class="mb-10 flex items-end justify-between gap-4">
        <form>
          <input
            type="text"
            placeholder="Search articles..."
            class="focus:border-primary focus:ring-primary bg-background-alt w-full rounded border border-gray-300 px-4 py-2 focus:ring-1 focus:outline-none"
          />
          <button type="submit"></button>
        </form>

        <select
          class="focus:border-primary focus:ring-primary bg-background-alt rounded border border-gray-300 px-4 py-2.5 focus:ring-1 focus:outline-none"
          v-model="selectedCategory"
          @change="handleSelectCategory"
        >
          <option value="">All Categories</option>
          <option v-for="item in categories" :key="item.id" :value="item.slug">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCardSkeleton
          v-if="isLoading || !posts || !posts?.items?.length"
          v-for="n in 6"
          :key="n"
        />
        <BlogCard v-for="post in posts?.items" :key="post.id" :post="post" />
      </div>
      <!-- Pagination -->
      <div v-if="(posts?.meta?.total_pages || 0) > 1" class="mt-8 flex justify-center gap-4">
        <AppButton size="sm" variant="secondary">
          <Icon icon="mdi:arrow-left" class="mr-2 h-5 w-5" />
          Prev
        </AppButton>

        <AppButton size="sm" label="1" />

        <AppButton size="sm" variant="secondary">
          Next
          <Icon icon="mdi:arrow-right" class="ml-2 h-5 w-5" />
        </AppButton>
      </div>
    </AppSection>
  </div>
</template>
