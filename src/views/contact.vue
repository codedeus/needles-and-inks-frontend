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
          title="Get In Touch"
          subtitle="Ready to collaborate, share a story, or need veterinary expertise? I'd love to hear from you."
          size="lg"
          class="max-w-2xl text-center"
        />
      </div>

      <section class="space-y-12">
        <!-- Contact Methods -->
        <div class="grid gap-8 md:grid-cols-2">
          <!-- Contact Form -->
          <div class="bg-background-alt rounded-lg border border-gray-200 p-8 shadow-sm">
            <h2 class="mb-6 text-2xl font-bold text-gray-900">Send a Message</h2>
            <form class="space-y-6">
              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label for="firstName" class="mb-2 block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    class="focus:border-primary focus:ring-primary bg-background w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label for="lastName" class="mb-2 block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    class="focus:border-primary focus:ring-primary bg-background w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label for="email" class="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="focus:border-primary focus:ring-primary bg-background w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label for="subject" class="mb-2 block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  class="focus:border-primary focus:ring-primary bg-background w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                  required
                >
                  <option value="">Select a topic</option>
                  <option value="writing-consultation">Writing Consultation</option>
                  <option value="veterinary-services">Veterinary Services</option>
                  <option value="speaking-engagement">Speaking Engagement</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div>
                <label for="message" class="mb-2 block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  class="focus:border-primary focus:ring-primary bg-background w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-1 focus:outline-none"
                  placeholder="Tell me about your project or how I can help..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="bg-primary focus:ring-primary hover:bg-primary-dark w-full rounded-md px-6 py-3 font-semibold text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <div class="bg-background-alt rounded-lg p-6">
              <h3 class="mb-4 text-xl font-semibold text-gray-900">Contact Information</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="text-primary mr-3">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Email</h4>
                    <p class="text-gray-600">contact@needlesandinks.com</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="text-primary mr-3">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Location</h4>
                    <p class="text-gray-600">Available for remote consultations worldwide</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="text-primary mr-3">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900">Response Time</h4>
                    <p class="text-gray-600">Within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-background-alt rounded-lg border border-gray-200 p-6">
              <h3 class="mb-4 text-xl font-semibold text-gray-900">Office Hours</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Monday - Friday</span>
                  <span class="text-gray-900">9:00 AM - 6:00 PM EST</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Saturday</span>
                  <span class="text-gray-900">10:00 AM - 4:00 PM EST</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Sunday</span>
                  <span class="text-gray-900">Closed</span>
                </div>
              </div>
              <p class="mt-4 text-sm text-gray-600">
                <span class="text-red-600">*</span> Emergency veterinary services available outside
                regular hours for existing patients.
              </p>
            </div>

            <div class="bg-background-alt rounded-lg p-6">
              <h3 class="mb-3 text-lg font-semibold">Follow My Journey</h3>
              <p class="text-primary-dark mb-4 text-sm">
                Stay updated with my latest stories, veterinary insights, and writing tips.
              </p>
              <div class="flex space-x-3">
                <a
                  href="#"
                  class="bg-primary hover:bg-primary-dark flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="bg-primary hover:bg-primary-dark flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  class="bg-primary hover:bg-primary-dark flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors"
                >
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="bg-background-alt rounded-lg p-8">
          <h3 class="mb-6 text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <h4 class="mb-2 font-semibold text-gray-900">
                What types of writing projects do you consult on?
              </h4>
              <p class="text-sm text-gray-600">
                I work with fiction and non-fiction projects that involve animals, veterinary
                themes, or medical accuracy. This includes novels, screenplays, documentaries, and
                educational content.
              </p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-gray-900">
                What veterinary services do you provide?
              </h4>
              <p class="text-sm text-gray-600">
                I provide comprehensive veterinary care including wellness exams, diagnostics,
                medical treatments, and surgical procedures. I also offer creative consulting for
                writers and filmmakers who need accurate veterinary representation in their work.
              </p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-gray-900">
                What are your speaking engagement topics?
              </h4>
              <p class="text-sm text-gray-600">
                I speak on veterinary ethics, animal welfare, creative writing, storytelling in
                healthcare, and the intersection of science and literature.
              </p>
            </div>
            <div>
              <h4 class="mb-2 font-semibold text-gray-900">How do you charge for consultations?</h4>
              <p class="text-sm text-gray-600">
                Rates vary by project scope and timeline. I offer both hourly consultations and
                project-based pricing. Contact me for a personalized quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AppSection>

    <AppSection class="grid grid-cols-2 !pt-0">
      <div class="bg-background-alt flex flex-col justify-center rounded-xl p-8 text-center">
        <h1 class="mb-4 text-3xl leading-tight font-bold text-gray-900 md:text-4xl">
          Ready to Start Your Project?
        </h1>
        <p class="mb-6 text-lg text-gray-700">
          Whether you're writing your first animal story, need expert veterinary care for your pet,
          or want veterinary expertise for your creative work, I'm here to help bring healing and
          authenticity to your project.
        </p>
        <div class="flex justify-center gap-4">
          <a href="mailto:contact@needlesandinks.com">
            <AppButton label="Start a Conversation" variant="secondary" />
          </a>
          <router-link to="/about">
            <AppButton label="Learn More About Me" />
          </router-link>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img
          src="/images/ozor-1.jpeg"
          alt="Dr. Promise Ozor"
          class="h-64 w-full rounded-xl object-cover shadow-lg md:h-80 lg:h-96"
        />
      </div>
    </AppSection>
  </div>
</template>
