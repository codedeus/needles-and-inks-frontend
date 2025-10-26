<script setup lang="ts">
import AppButton from "@components/AppButton.vue"
import AppSection from "@components/AppSection.vue"
</script>

<template>
  <AppSection background="bg-background-alt" class="!py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900">Stay Connected</h2>
        <p class="mb-8 text-gray-600">
          Get the latest veterinary insights, heartwarming animal stories, and writing tips
          delivered straight to your inbox.
        </p>
        <div class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            class="focus:ring-primary bg-background flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:outline-none"
          />
          <AppButton variant="primary" size="md"> Subscribe </AppButton>
        </div>
      </div>
    </div>
  </AppSection>
</template>
