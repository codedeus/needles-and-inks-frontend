<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { ref, watch, onUnmounted } from "vue"
import MobileMenu from "@/components/layout/MobileMenu.vue"
import AppFooter from "@components/layout/AppFooter.vue"
import AppSection from "@components/AppSection.vue"
import { SOCIAL_LINKS } from "./constants/navigation"
import { useGetCategories } from "./composables/api"

const { data: categories, isLoading } = useGetCategories()

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

// Prevent body scroll when mobile menu is open
watch(mobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
    document.body.style.width = "100%"
  } else {
    document.body.style.overflow = ""
    document.body.style.position = ""
    document.body.style.width = ""
  }
})

// Cleanup on component unmount
onUnmounted(() => {
  document.body.style.overflow = ""
  document.body.style.position = ""
  document.body.style.width = ""
})
</script>

<template>
  <div class="bg-background flex min-h-screen flex-col">
    <!-- Top Navigation Bar -->
    <header class="bg-background-alt sticky top-0 z-50">
      <AppSection class="!py-0">
        <div class="flex h-16 items-center justify-between">
          <!-- Logo and Brand -->
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <Icon icon="mdi:needle" class="text-primary h-8 w-8" />
              <h1 class="text-xl font-bold text-gray-900 sm:text-2xl">Needles &amp; Inks</h1>
            </router-link>
          </div>

          <!-- Search and Social Icons -->
          <div class="hidden items-center space-x-4 md:flex">
            <button class="hover:text-primary cursor-pointer p-2 text-gray-900 transition-colors">
              <Icon icon="mdi:search" class="h-5 w-5" />
            </button>
            <a
              v-for="value in SOCIAL_LINKS"
              :key="value.icon"
              :href="value.url"
              class="hover:text-primary p-2 text-gray-900 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :icon="value.icon" class="h-5 w-5" />
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button
              @click="toggleMobileMenu"
              class="text-primary hover:text-primary-dark relative rounded-lg p-2 transition-all focus:outline-none"
              :class="{ 'text-primary bg-background': mobileMenuOpen }"
            >
              <Icon
                :icon="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
                class="h-6 w-6 transition-transform"
              />
            </button>
          </div>
        </div>

        <!-- Mobile Menu Component -->
        <MobileMenu :is-open="mobileMenuOpen" @close="closeMobileMenu" />
      </AppSection>

      <!-- Categories as tab -->
      <div class="scrollbar-hide border-background overflow-x-auto border-t py-2">
        <AppSection class="!py-0">
          <div class="flex justify-between gap-4">
            <div
              v-if="!categories?.length || isLoading"
              v-for="n in 5"
              :key="n"
              class="bg-background h-4 min-w-24 animate-pulse rounded-full"
            ></div>
            <router-link
              v-else
              v-for="category in categories ?? []"
              :to="`/blog?category=${category.slug}`"
              class="hover:text-primary hover:bg-background rounded-full px-3 py-1 text-sm font-medium whitespace-nowrap text-gray-900 transition-colors"
              :class="{ 'text-primary bg-background': $route.query.category === category.slug }"
            >
              {{ category.name }}
            </router-link>
          </div>
        </AppSection>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="flex-1">
      <router-view />
    </main>

    <!-- Footer -->
    <AppFooter :categories="categories" />
  </div>
</template>

<style>
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
</style>
