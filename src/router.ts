import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("@/views/contact.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog/index.vue"),
  },
  {
    path: "/blog/:slug",
    name: "blog-post",
    component: () => import("@/views/blog/[slug].vue"),
  },
  // 404
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { top: 0, behavior: "smooth" }
  },
})

export default router
