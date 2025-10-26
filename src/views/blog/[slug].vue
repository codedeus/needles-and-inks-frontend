<script setup lang="ts">
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import AppSection from "@/components/AppSection.vue"
import BlogCard from "@/components/BlogCard.vue"
import ButtonGroup from "@/components/ButtonGroup.vue"
import { Icon } from "@iconify/vue"
import NewsletterSection from "@components/others/NewsletterSection.vue"
import { formatDate } from "@/utils"
import { useGetBlogPostBySlug, useGetBlogPosts } from "@/composables/api"
import BlogCardSkeleton from "@components/BlogCardSkeleton.vue"

const route = useRoute()
const activeSide = ref("trending")

const { data: post, isLoading } = useGetBlogPostBySlug(route.params.slug as string)

const combinedParams = computed(() => ({
  page: 1,
  limit: 6,
  ...(post.value ? { category: post.value.category_name?.replace(" ", "-") } : {}),
}))
const { data: relatedPosts, isLoading: isLoadingRelated } = useGetBlogPosts(combinedParams)
</script>

<template>
  <div>
    <!-- Blog Post Header -->
    <AppSection class="!pt-8 !pb-8">
      <div>
        <!-- Breadcrumb -->
        <nav class="mb-6 text-sm text-gray-500">
          <router-link to="/" class="hover:text-gray-700">Home</router-link>
          <span class="mx-2">/</span>
          <router-link to="/blog" class="hover:text-gray-700">Blog</router-link>
          <span class="mx-2">/</span>
          <span class="text-gray-900">{{ post?.title || route.params.slug }}</span>
        </nav>

        <!-- Post Meta -->
        <div
          v-if="isLoading || !post"
          class="bg-background-alt mb-6 h-4 w-60 animate-pulse rounded-full"
        ></div>
        <div v-else class="mb-6 flex items-center text-sm text-gray-600">
          <span class="bg-background-alt text-primary-dark rounded-full px-3 py-1">
            {{ post?.category_name }}
          </span>
          <span class="mx-3">•</span>
          <span v-if="post">{{ formatDate(post?.created_at) }}</span>
        </div>

        <!-- Post Title -->
        <div v-if="isLoading || !post" class="mb-8">
          <div class="bg-background-alt h-12 w-full animate-pulse rounded-full"></div>
          <div class="bg-background-alt mt-4 h-12 w-1/2 animate-pulse rounded-full"></div>
        </div>
        <h1
          v-else
          class="mb-8 text-3xl leading-tight font-bold text-gray-900 sm:text-4xl lg:text-5xl"
        >
          {{ post?.title }}
        </h1>

        <!-- Author Info -->
        <div class="flex items-center space-x-4">
          <div
            class="bg-primary flex h-12 w-12 items-center justify-center rounded-full text-white"
          >
            <span class="font-semibold">PO</span>
          </div>
          <div>
            <p class="font-semibold text-gray-900">Dr. Promise Ozor</p>
            <p class="text-sm text-gray-600">Veterinarian & Writer</p>
          </div>
        </div>
      </div>
    </AppSection>

    <!-- Blog Post Content -->
    <AppSection class="!pt-4 !pb-8">
      <div class="flex flex-col gap-12 lg:grid lg:grid-cols-3">
        <!-- main content -->
        <div class="lg:col-span-2">
          <div>
            <!-- Featured Image -->
            <div class="mb-8 overflow-hidden rounded-lg">
              <div
                v-if="isLoading || !post"
                class="bg-background-alt mx-auto h-80 w-full animate-pulse rounded-2xl"
              ></div>
              <img
                v-else
                :src="post?.cover_image"
                :alt="post?.title"
                class="bg-background-alt mx-auto max-h-[600px] min-h-48 rounded-xl object-cover"
              />
            </div>

            <!-- Post Content -->
            <div v-if="isLoading || !post" class="my-6 space-y-8">
              <div v-for="v in 4" :key="v">
                <div class="bg-background-alt h-5 w-full animate-pulse rounded-full"></div>
                <div class="bg-background-alt my-2 h-5 w-full animate-pulse rounded-full"></div>
                <div class="bg-background-alt h-5 w-1/2 animate-pulse rounded-full"></div>
              </div>
            </div>
            <div v-else class="prose prose-lg max-w-none" v-html="post?.content"></div>

            <!-- Post Tags -->
            <div class="mt-8 flex flex-wrap gap-2 border-t border-gray-200 pt-8">
              <span
                v-if="post"
                class="bg-background-alt rounded-full px-3 py-1 text-sm text-gray-700"
              >
                {{ post?.category_name }}
              </span>
              <span class="bg-background-alt rounded-full px-3 py-1 text-sm text-gray-700">
                Dr. Promise Ozor
              </span>
              <span
                v-if="post"
                class="bg-background-alt rounded-full px-3 py-1 text-sm text-gray-700"
              >
                {{ formatDate(post?.created_at) }}
              </span>
            </div>

            <!-- Share Buttons -->
            <div class="mt-8 flex items-start justify-between gap-6 border-t border-gray-200 pt-8">
              <span class="flex flex-shrink-0 text-base font-semibold text-gray-900"
                >Share this post:</span
              >
              <div class="flex flex-wrap gap-2">
                <button
                  class="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  <Icon icon="mdi:twitter" class="h-5 w-5" />
                  <span class="hidden md:inline">Twitter</span>
                </button>
                <button
                  class="flex items-center gap-2 rounded-lg bg-blue-800 px-4 py-2 text-white hover:bg-blue-900"
                >
                  <Icon icon="mdi:facebook" class="h-5 w-5" />
                  <span class="hidden md:inline">Facebook</span>
                </button>
                <button
                  class="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
                >
                  <Icon icon="mdi:whatsapp" class="h-5 w-5" />
                  <span class="hidden md:inline">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Comments Section -->
          <div class="mx-auto mt-12 max-w-4xl">
            <!-- <h2 class="mb-8 text-2xl font-bold text-gray-900">Comments ({{ comments.length }})</h2> -->

            <!-- Comment Form -->
            <!-- <div class="bg-background-alt mb-12 rounded-xl p-6">
              <h3 class="mb-4 text-lg font-semibold text-gray-900">Leave a Comment</h3>
              <form @submit.prevent="submitComment" class="space-y-4">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label for="author" class="block text-sm font-medium text-gray-700"
                      >Name *</label
                    >
                    <input
                      id="author"
                      v-model="newComment.author"
                      type="text"
                      required
                      class="focus:border-primary focus:ring-primary bg-background mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700"
                      >Email *</label
                    >
                    <input
                      id="email"
                      v-model="newComment.email"
                      type="email"
                      required
                      class="focus:border-primary focus:ring-primary bg-background mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label for="content" class="block text-sm font-medium text-gray-700"
                    >Comment *</label
                  >
                  <textarea
                    id="content"
                    v-model="newComment.content"
                    rows="4"
                    required
                    class="focus:border-primary focus:ring-primary bg-background mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                    placeholder="Share your thoughts..."
                  ></textarea>
                </div>
                <AppButton type="submit" class="w-full sm:w-max" variant="primary"
                  >Post Comment</AppButton
                >
              </form>
            </div> -->

            <!-- Comments List -->
            <!-- <div class="space-y-6">
              <div
                v-for="comment in comments"
                :key="comment.id"
                class="bg-background-alt rounded-xl p-6"
              >
                <div class="flex items-start space-x-4">
                  <div
                    class="bg-primary hidden h-10 w-10 items-center justify-center rounded-full text-white md:flex"
                  >
                    <span class="text-sm font-semibold">{{ comment.avatar }}</span>
                  </div>
                  <div class="flex-1">
                    <div class="flex items-center space-x-2">
                      <h4 class="text-sm font-semibold text-gray-900 md:text-base">
                        {{ comment.author }}
                      </h4>
                      <span class="text-sm text-gray-500">{{
                        formatDate(comment.publishedAt)
                      }}</span>
                    </div>
                    <p class="mt-2 text-sm text-gray-700 md:text-base">{{ comment.content }}</p>
                    <div class="mt-3 flex items-center space-x-4 text-sm">
                      <button class="hover:text-primary text-gray-500">
                        <Icon icon="mdi:thumb-up-outline" class="mr-1 h-4 w-4" />
                        Like
                      </button>
                      <button class="hover:text-primary text-gray-500">
                        <Icon icon="mdi:reply" class="mr-1 h-4 w-4" />
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <div class="sticky top-32 space-y-6">
            <ButtonGroup
              v-model="activeSide"
              :options="[
                { label: 'Related Posts', value: 'related' },
                { label: 'Trending', value: 'trending' },
              ]"
              full-width
              class="mb-4"
              size="lg"
            />
            <div class="divide-y divide-gray-200">
              <BlogCardSkeleton
                v-if="isLoadingRelated || !relatedPosts || !relatedPosts?.items?.length"
                v-for="n in 4"
                :key="n"
                variant="landscape"
                class="px-2 py-3"
              />
              <BlogCard
                v-else
                v-for="post in relatedPosts?.items.slice(0, 5)"
                :key="post?.id"
                :post="post"
                variant="landscape"
                class="px-2 py-3"
              />
            </div>

            <!-- advert -->
            <div class="bg-accent hidden rounded-xl px-6 py-8 text-center md:block">
              <h3 class="mb-2 text-lg font-bold">Writing Consultations</h3>
              <p class="text-sm font-medium">
                Need help with your animal-related stories or medical writing? Book a consultation
                session.
              </p>
            </div>
            <!-- advert -->
          </div>
        </aside>
      </div>
    </AppSection>

    <!-- advert -->
    <AppSection class="!py-8 md:!py-12">
      <div class="bg-accent rounded-xl px-12 py-6 text-center">
        <h3 class="mb-2 text-lg font-bold md:text-2xl">Veterinary Services Available</h3>
        <p class="text-sm font-medium md:text-base">
          Need compassionate care for your pet? Dr. Promise offers comprehensive veterinary services
          alongside her writing.
        </p>
      </div>
    </AppSection>
    <!-- advert -->

    <!-- Newsletter CTA -->
    <NewsletterSection />
  </div>
</template>

<style scoped>
.prose {
  p {
    font-weight: 400;
    margin: 1rem 0;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
  }
}

button {
  cursor: pointer;
}
</style>
