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

import DynamicModal from '@/components/dynamic-modal'
Vue.component('dynamic-modal', DynamicModal)

import LoadingState from '@/components/loading-state'
Vue.component('loading-state', LoadingState)
import EmptyState from '@/components/empty-state'
Vue.component('empty-state', EmptyState)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
