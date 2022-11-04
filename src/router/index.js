import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("@/layout/main"),
    children: [
      {
        name: "home",
        path: "/",
        component: () => import("@/views/components/all-category.vue"),
      },
      {
        name: 'AllCategory',
        path: '/category',
        component: () => import("@/views/components/index.vue"),
      },
      {
        name: 'AllCategoryList',
        path: '/category/all',
        component: () => import("@/views/components/all-category.vue"),
      },
      {
        name: 'CategoryPay',
        path: '/pay',
        component: () => import("@/views/components/pay/index.vue"),
      }
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
