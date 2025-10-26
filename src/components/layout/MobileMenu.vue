<script setup lang="ts">
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/navigation"
import { Icon } from "@iconify/vue"

interface Props {
  isOpen: boolean
}

interface Emits {
  close: []
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <!-- Mobile Menu Backdrop -->
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="isOpen"
      class="bg-opacity-20 fixed inset-0 top-16 z-30 bg-black/5 backdrop-blur-sm md:hidden"
      @click="$emit('close')"
    ></div>
  </Transition>

  <!-- Mobile Navigation Menu -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-y-2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-2"
  >
    <div
      v-show="isOpen"
      class="bg-background-alt fixed inset-x-0 top-16 z-40 border-b border-gray-200 shadow-lg md:hidden"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-1 py-4">
          <router-link
            v-for="item in NAV_LINKS"
            :key="item.path"
            :to="item.path"
            @click="$emit('close')"
            class="hover:text-primary block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-all hover:pl-6"
          >
            <div class="flex items-center space-x-3">
              <Icon :icon="item.icon" class="h-5 w-5" />
              <span>{{ item.name }}</span>
            </div>
          </router-link>
        </div>

        <!-- Mobile Social Links -->
        <div class="border-background border-t py-4">
          <div class="flex items-center justify-center space-x-6">
            <span class="text-sm font-medium text-gray-500">Follow me on:</span>
            <a
              v-for="social in SOCIAL_LINKS"
              :key="social.icon"
              :href="social.url"
              class="hover:text-primary hover:bg-background rounded-lg p-2 text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon :icon="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
