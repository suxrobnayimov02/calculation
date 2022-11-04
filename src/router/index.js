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
        name: 'WaterSupply',
        path: '/category/WaterSupply',
        component: () => import("@/views/components/waterSupply.vue"),
      },
      {
        name: 'ArmatureList',
        path: '/category/ArmatureList',
        component: () => import("@/views/components/list-armature.vue"),
      },
      {
        name: 'SewageList',
        path: '/category/SewageList',
        component: () => import("@/views/components/list-sewage.vue"),
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
