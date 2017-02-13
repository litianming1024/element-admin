import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
// import NProgress from 'vue-nprogress'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import * as filters from './filters'
import VueResource from 'vue-resource'
import { TOGGLE_SIDEBAR } from 'vuex-store/mutation-types'
import ElementUI from 'element-ui'

Vue.use(VueResource)
// Vue.use(NProgress)
Vue.use(ElementUI)

// Enable devtools
Vue.config.devtools = true

sync(store, router)

// const nprogress = new NProgress({ parent: '.nprogress-container' })

const { state } = store

router.beforeEach((route, redirect, next) => {
  if (state.app.device.isMobile && state.app.sidebar.opened) {
    store.commit(TOGGLE_SIDEBAR, false)
  }
  next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const app = new Vue({
  router,
  store,
  // nprogress,
  ...App
})

export { app }
