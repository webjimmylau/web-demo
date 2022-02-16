import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    redirect: '/home/welcome',
    children: [
      {
        path: '/home/welcome',
        component: () => import('@/views/home/welcome/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/product',
    component: () => import('@/views/product/index.vue'),
    redirect: '/product/goods',
    children: [
      {
        path: '/product/goods',
        component: () => import('@/views/product/goods/index.vue'),
        redirect: '/product/goods/list',
        children: [
          {
            path: '/product/goods/list',
            component: () => import('@/views/product/goods/list.vue')
          },
          {
            path: '/product/goods/detail/:id',
            component: () => import('@/views/product/goods/detail.vue')
          }
        ]
      },
      {
        path: '/product/category',
        component: () => import('@/views/product/category/index.vue')
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        redirect: '/product/attr/list',
        children: [
          {
            path: '/product/attr/list',
            component: () => import('@/views/product/attr/list.vue')
          },
          {
            path: '/product/attr/add',
            component: () => import('@/views/product/attr/add.vue')
          },
          {
            path: '/product/attr/edit/:id',
            component: () => import('@/views/product/attr/edit.vue')
          }
        ]
      },
      {
        path: '/product/brand',
        component: () => import('@/views/product/brand/index.vue'),
        redirect: '/product/brand/list',
        children: [
          {
            path: '/product/brand/list',
            component: () => import('@/views/product/brand/list.vue')
          },
          {
            path: '/product/brand/add',
            component: () => import('@/views/product/brand/add.vue')
          },
          {
            path: '/product/brand/edit/:id',
            component: () => import('@/views/product/brand/edit.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/*',
    component: () => import('@/views/404.vue')
  }
]

let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router
