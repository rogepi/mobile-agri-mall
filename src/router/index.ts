import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('../views/home/index.vue'),
    meta: {
      title: '农商平台-首页',
    },
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('../views/category/index.vue'),
    meta: {
      title: '农商平台-分类',
    },
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('../views/cart/index.vue'),
    meta: {
      title: '农商平台-购物车',
    },
  },
  {
    name: 'mine',
    path: '/mine',
    component: () => import('../views/mine/index.vue'),
    meta: {
      title: '农商平台-我的',
    },
  },
  {
    name: 'notFound',
    path: '/:path(.*)+',
    redirect: {
      name: 'home',
    },
  },
  {
    name: 'temp',
    path: '/temp',
    component: () => import('../test/temp.vue'),
    meta: {
      title: '测试Temp',
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title
  if (title) {
    document.title = title as string
  }
  next()
})

export default router
