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
Vue.component('accordion', accordion)

Vue.config.productionTip = false

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
  render: h => h(App)
}).$mount('#app')
