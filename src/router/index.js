import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'James Hood - Portfolio',
      breadcrumb: [
        {
          name: 'Home',
          link: '/',
          icon: 'fas fa-home'
        }
      ]
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'James Hood - About',
      breadcrumb: [
        {
          name: 'About',
          link: '/',
          icon: 'fas fa-question-circle'
        }
      ]
    },
    component: () => import('@/views/About.vue')
  },
  {
    path: '/components',
    name: 'Components',
    meta: {
      title: 'James Hood - Components',
      breadcrumb: [
        {
          name: 'Components',
          link: '/',
          icon: 'fas fa-cubes'
        }
      ]
    },
    component: () => import('@/views/Components.vue')
  },
  {
    path: '*',
    meta: { title: 'Error 404' },
    component: () => import('@/views/error404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
})

export default router
