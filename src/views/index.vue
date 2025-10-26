<script setup lang="ts">
import BlogCard from "@/components/BlogCard.vue"
import AppSection from "@components/AppSection.vue"
import SectionHeader from "@components/SectionHeader.vue"
import ButtonGroup from "@components/ButtonGroup.vue"
import { ref } from "vue"
import NewsletterSection from "@components/others/NewsletterSection.vue"
import { useGetBlogPosts } from "@/composables/api"
import BlogCardSkeleton from "@components/BlogCardSkeleton.vue"

const activeSide = ref("latest")

const { data: blogPosts, isLoading } = useGetBlogPosts({ page: 1, limit: 20 })
</script>

<template>
  <div>
    <!-- Hero Section -->
    <AppSection class="flex flex-col gap-6 !pt-4 !pb-0 md:flex-row md:gap-16">
      <!-- latest blog post first one  -->
      <div
        v-if="isLoading || !blogPosts || blogPosts?.items?.length < 1"
        class="bg-background-alt flex w-full animate-pulse items-end rounded-2xl p-5 md:h-[768px] md:w-2/3 md:p-8"
      >
        <div class="w-full">
          <!-- Category pill -->
          <div class="bg-background mb-3 h-5 w-20 rounded-full"></div>
          <!-- Title lines -->
          <div class="bg-background mb-3 h-8 w-3/4 rounded-full"></div>
          <div class="bg-background mb-6 h-8 w-1/2 rounded-full"></div>
          <!-- Date -->
          <div class="bg-background mb-2 h-3 w-16 rounded-full"></div>
        </div>
      </div>
      <div
        v-else
        v-for="post in blogPosts?.items?.slice(0, 1) ?? []"
        class="bg-background-alt relative h-full w-full rounded-2xl md:h-[768px] md:w-2/3"
      >
        <img
          :src="post.cover_image"
          alt="Cover image for the blog post"
          class="h-full w-full rounded-2xl object-cover"
        />

        <div
          class="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-end rounded-2xl bg-gradient-to-t from-black/30 to-transparent p-5 text-white md:p-8"
        >
          <div class="flex max-w-screen-sm flex-col items-start gap-2">
            <span
              class="bg-background-alt cursor-pointer rounded-full px-3 py-1 text-xs text-black"
              @click="
                $router.push(
                  `/blog?category=${post.category_name?.replace(/\s+/g, '-').toLowerCase()}`,
                )
              "
            >
              {{ post.category_name }}
            </span>

            <h3 class="mt-2 mb-2 text-2xl font-semibold md:text-3xl">
              {{ post.title }}
            </h3>
            <span class="text-sm">{{
              new Date(post.created_at).toLocaleString("en-US", { dateStyle: "medium" })
            }}</span>
            <router-link
              :to="`/blog/${post.slug}`"
              class="text-primary hover:text-primary-dark mt-2 font-medium transition-all hover:underline"
            >
              Read More →
            </router-link>
          </div>
        </div>
      </div>

      <div class="w-full space-y-6 md:w-1/3">
        <template v-if="!blogPosts || isLoading || blogPosts.items?.length <= 1">
          <BlogCardSkeleton v-for="n in 2" :key="n" class="px-2 py-3" />
        </template>
        <BlogCard
          v-else
          v-for="post in blogPosts?.items?.slice(1, 3) ?? []"
          :key="post.id"
          :post="post"
          class="px-2 py-3"
        />
      </div>
    </AppSection>

    <!-- advert -->
    <AppSection class="!py-0">
      <div class="bg-accent mt-10 rounded-xl bg-gradient-to-br px-12 py-12 text-center md:py-6">
        <h3 class="mb-2 text-lg font-bold md:text-2xl">Veterinary Services Available</h3>
        <p class="text-sm font-medium md:text-base">
          Need compassionate care for your pet? Dr. Promise offers comprehensive veterinary services
          alongside her writing.
        </p>
      </div>
    </AppSection>
    <!-- advert -->

    <AppSection class="!pt-12 !pb-12 md:!pt-20">
      <div class="flex flex-col-reverse gap-12 lg:grid lg:grid-cols-3">
        <aside>
          <ButtonGroup
            v-model="activeSide"
            :options="[
              { label: 'Most Visited', value: 'most_visited' },
              { label: 'Latest', value: 'latest' },
            ]"
            full-width
            class="mb-4"
            size="lg"
          />
          <div class="divide-y divide-gray-200">
            <BlogCardSkeleton
              v-if="isLoading || !blogPosts || blogPosts?.items?.length <= 3"
              v-for="n in 5"
              :key="n"
              variant="landscape"
              class="px-2 py-3"
            />
            <BlogCard
              v-else
              v-for="post in blogPosts?.items?.slice(0, 5)"
              :key="post.id"
              :post="post"
              variant="landscape"
              class="px-2 py-3"
            />
          </div>

          <!-- advert -->
          <div class="bg-accent mt-8 rounded-xl px-12 py-28 text-center">
            <h3 class="mb-2 text-2xl font-bold">Writing Consultations</h3>
            <p class="text-base font-medium">
              Need help with your animal-related stories or medical writing? Book a consultation
              session.
            </p>
          </div>
          <!-- advert -->
        </aside>
        <section class="col-span-2">
          <SectionHeader title="Editor's Choice" class="mb-2" />
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <BlogCardSkeleton
              v-if="isLoading || !blogPosts || blogPosts?.items?.length <= 3"
              v-for="n in 6"
              :key="n"
            />
            <BlogCard
              v-else
              v-for="post in blogPosts?.items?.slice(3, 9)"
              :key="post.id"
              :post="post"
            />
          </div>
        </section>
      </div>
    </AppSection>

    <!-- Featured Articles Section -->
    <AppSection v-if="(blogPosts?.meta?.total_items || 0) > 9" class="!pt-0 md:!pt-4">
      <SectionHeader
        title="More Stories"
        subtitle="Discover tales from the veterinary world and the art of storytelling."
        class="mb-8"
        size="lg"
      />
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <BlogCardSkeleton
          v-if="isLoading || !blogPosts || blogPosts?.items?.length <= 9"
          v-for="n in 6"
          :key="n"
        />
        <BlogCard v-for="post in blogPosts?.items?.slice(10, 16)" :key="post.id" :post="post" />
      </div>
    </AppSection>

    <!-- Newsletter Section -->
    <NewsletterSection />
  </div>
</template>
