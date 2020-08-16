import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Buefy from 'buefy'
Vue.use(Buefy, { defaultIconPack: 'fas' })

// Font Awesome
import { library, dom } from '@fortawesome/fontawesome-svg-core'
// add fas, fab, far packs to library
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, fas, far)
dom.watch()

require('typeface-roboto')
require('typeface-open-sans')

import DynamicModal from '@/components/dynamic-modal'
Vue.component('dynamic-modal', DynamicModal)

import LoadingState from '@/components/loading-state'
Vue.component('loading-state', LoadingState)
import EmptyState from '@/components/empty-state'
Vue.component('empty-state', EmptyState)
import Breadcrumb from '@/components/breadcrumb'
Vue.component('breadcrumb', Breadcrumb)
import accordion from '@/components/accordion.vue'
import store from './store'
Vue.component('accordion', accordion)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags)

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title
  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]')
  ).map(el => el.parentNode.removeChild(el))
  if (!nearestWithMeta) return next()
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })

      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    .forEach(tag => document.head.appendChild(tag))

  next()
})

Vue.filter('truncate', (body, length) => {
  let ending = '...'
  if (body && body.length > length) {
    return body.substring(0, length - ending.length) + ending
  } else {
    return body
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
