<script setup lang="ts">
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/navigation"
import { BlogPostCategory } from "@/types"
import AppSection from "@components/AppSection.vue"
import { Icon } from "@iconify/vue"

defineProps<{ categories?: BlogPostCategory[] }>()
</script>

<template>
  <footer class="bg-primary-dark text-background-alt">
    <AppSection class="!py-12">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand Section -->
        <div class="col-span-1 lg:col-span-2">
          <div class="mb-4 flex items-center space-x-2">
            <Icon icon="mdi:needle" class="text-background h-8 w-8" />
            <h1 class="text-xl font-bold">Needles &amp; Inks</h1>
          </div>
          <p class="text-background-alt mb-6 max-w-md text-sm leading-relaxed">
            Where veterinary science meets creative storytelling. Join <b>Dr. Promise Ozor</b> as
            she shares heartwarming animal stories, veterinary insights, and the art of healing
            through words.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in SOCIAL_LINKS"
              :key="social.icon"
              :href="social.url"
              class="text-background-alt hover:text-background transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :icon="social.icon" class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-background mb-4 text-sm font-semibold tracking-wider uppercase">
            Quick Links
          </h3>
          <ul class="space-y-2">
            <li v-for="link in NAV_LINKS">
              <router-link
                :to="link.path"
                class="text-background-alt hover:text-background text-sm transition-colors"
                >{{ link.name }}</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div v-if="categories && categories.length">
          <h3 class="text-background mb-4 text-sm font-semibold tracking-wider uppercase">
            Categories
          </h3>
          <ul class="grid grid-cols-2 gap-2">
            <li v-for="category in categories" :key="category.id">
              <router-link
                :to="`/blog?category=${category.slug}`"
                class="text-background-alt hover:text-background text-sm transition-colors"
                >{{ category.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="border-background-alt/20 mt-8 border-t pt-8">
        <div class="flex flex-col items-center justify-between md:flex-row">
          <p class="text-background-alt text-sm">
            © {{ new Date().getFullYear() }} Needles &amp; Inks. All rights reserved.
          </p>
          <div class="mt-4 md:mt-0">
            <p class="text-background-alt text-sm">
              Web masterpiece by
              <a
                href="https://github.com/symplytheo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-background text-sm underline decoration-dotted underline-offset-2 transition-colors"
                >Theo Iyonor</a
              >
            </p>
          </div>
        </div>
      </div>
    </AppSection>
  </footer>
</template>
