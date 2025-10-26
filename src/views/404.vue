<script setup lang="ts">
import { NAV_LINKS } from "@/constants/navigation"
import AppButton from "@components/AppButton.vue"
import AppSection from "@components/AppSection.vue"
import { Icon } from "@iconify/vue"
</script>

<template>
  <AppSection>
    <div class="mx-auto max-w-2xl space-y-8 text-center">
      <div class="space-y-4">
        <div
          class="text-primary flex items-end justify-center gap-1 text-8xl font-bold md:text-9xl"
        >
          4
          <span
            class="border-primary flex h-24 w-24 items-center justify-center rounded-full border-[12px]"
          >
            <Icon icon="mdi:needle" class="text-primary h-12 w-12" />
          </span>
          4
        </div>
      </div>

      <!-- Error message -->
      <div class="space-y-4">
        <h1 class="text-3xl font-bold text-gray-900 md:text-4xl">Well, this is awkward...</h1>
        <p class="mx-auto max-w-lg text-lg leading-relaxed text-gray-600">
          The page you’re chasing is playing hide-and-seek. Don’t worry, we’ll help you find your
          way home.
        </p>
      </div>

      <div class="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
        <AppButton label="Go Home" size="lg" @click="$router.push('/')" class="w-full sm:w-auto" />
        <AppButton
          label="Go Back"
          variant="secondary"
          size="lg"
          @click="$router.back()"
          class="w-full sm:w-auto"
        />
      </div>

      <!-- Helpful links -->
      <div class="border-t border-gray-200 pt-8">
        <p class="mb-4 text-sm text-gray-500">Or try these helpful links:</p>
        <nav class="flex flex-wrap justify-center gap-6 text-sm">
          <router-link
            v-for="link in NAV_LINKS.slice(1)"
            :to="link.path"
            class="text-primary hover:text-primary transition-colors"
          >
            {{ link.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </AppSection>
</template>
