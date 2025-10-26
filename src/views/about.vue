<script setup lang="ts">
import AppButton from "@components/AppButton.vue"
import AppSection from "@components/AppSection.vue"
import SectionHeader from "@components/SectionHeader.vue"
</script>

<template>
  <div>
    <AppSection class="!pt-10">
      <div class="mb-16 flex justify-center">
        <SectionHeader
          title="About Me & My World"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          size="lg"
          class="max-w-2xl text-center"
        />
      </div>

      <section class="space-y-12">
        <!-- Author Introduction -->
        <div class="grid items-center gap-8 md:grid-cols-2">
          <div class="space-y-6">
            <h2 class="text-3xl font-bold text-gray-900">Dr. Promise Ozor</h2>
            <p class="text-lg leading-relaxed text-gray-600">
              With over 15 years of experience as a licensed veterinarian and a passion for
              storytelling, I bridge the gap between animal care and compelling narratives. My
              journey began in rural veterinary practice, where I discovered that every animal has a
              story worth telling.
            </p>
            <p class="leading-relaxed text-gray-600">
              As a practicing veterinarian, I provide comprehensive care including wellness exams,
              diagnostics, medical treatments, and surgical procedures. When I'm not in the clinic
              caring for four-legged patients, you'll find me crafting stories that celebrate the
              bond between humans and animals. My writing has been featured in various veterinary
              publications and literary magazines, exploring themes of compassion, healing, and the
              profound connections we share with our animal companions.
            </p>
          </div>
          <div class="flex justify-center">
            <div class="bg-background-alt flex h-96 w-80 items-center justify-center rounded-lg">
              <img
                src="/images/ozor-2.jpeg"
                alt="Dr. Promise Ozor"
                class="h-full w-full rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        <!-- About the Blog -->
        <div class="bg-background-alt rounded-lg p-8">
          <h3 class="mb-4 text-2xl font-bold text-gray-900">About Needles & Inks</h3>
          <p class="mb-4 leading-relaxed text-gray-600">
            Needles & Inks is where veterinary science meets creative expression. This blog serves
            as a platform to share insights from the veterinary world while exploring the art of
            storytelling. Here, you'll find a unique blend of:
          </p>
          <ul class="space-y-2 text-gray-600">
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Real stories from veterinary practice (with privacy respected)
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Writing tips and techniques for aspiring authors
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Animal health insights and veterinary care education
            </li>
            <li class="flex items-start">
              <span class="text-primary mr-2">•</span>
              Personal reflections on the intersection of healing and creativity
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="mb-8 text-center text-2xl font-bold text-gray-900">Services I Offer</h3>
          <div class="grid gap-6 md:grid-cols-3">
            <div
              class="bg-background-alt rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg"
            >
              <div class="text-primary mb-4">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-semibold text-gray-900">Writing Consultation</h4>
              <p class="text-sm leading-relaxed text-gray-600">
                Get personalized guidance on your writing projects, from story development to
                manuscript review. Specializing in animal-related narratives and medical writing.
              </p>
            </div>

            <div
              class="bg-background-alt rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg"
            >
              <div class="mb-4 text-green-600">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-semibold text-gray-900">Veterinary Services</h4>
              <p class="text-sm leading-relaxed text-gray-600">
                Comprehensive veterinary care including wellness exams, diagnostics, medical
                treatments, and surgical procedures. Also available for veterinary consulting on
                creative projects requiring medical accuracy.
              </p>
            </div>

            <div
              class="bg-background-alt rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-lg"
            >
              <div class="mb-4 text-purple-600">
                <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <h4 class="mb-3 text-xl font-semibold text-gray-900">Speaking Engagements</h4>
              <p class="text-sm leading-relaxed text-gray-600">
                Available for conferences, workshops, and events on topics ranging from veterinary
                ethics to creative writing and the healing power of storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppSection>

    <AppSection class="grid grid-cols-2 !pt-4">
      <div class="bg-background-alt flex flex-col justify-center rounded-xl p-8 text-center">
        <h1 class="mb-4 text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
          Let's Connect and Share Stories
        </h1>
        <p class="mb-6 text-lg text-gray-700">
          Whether you're interested in collaborating on a writing project, need veterinary care for
          your pet, want expertise for your creative work, or simply want to share your own animal
          stories, I'd love to hear from you.
        </p>
        <div class="flex justify-center gap-4">
          <a href="mailto:contact@needlesandinks.com">
            <AppButton label="Send an Email" variant="secondary" />
          </a>
          <router-link to="/blog">
            <AppButton label="Read the Blog" />
          </router-link>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img
          src="/images/ozor-1.jpeg"
          alt="Dr. Promise Ozor"
          class="h-64 w-full rounded-xl object-cover object-center shadow-lg md:h-80 lg:h-96"
        />
      </div>
    </AppSection>
  </div>
</template>
