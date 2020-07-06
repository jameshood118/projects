import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'Jamees Hood - Portfolio',
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
      title: 'Jamees Hood - About',
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
      title: 'Jamees Hood - Components',
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
  routes
})

export default router
