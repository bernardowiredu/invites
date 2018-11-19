
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from '@/store/store.js'
import './registerServiceWorker'
import iView from 'iview'
import UIkit from 'uikit'
import locale from 'iview/dist/locale/en-US'
import ElementUI from 'element-ui'
import Icons from 'uikit/dist/js/uikit-icons'
import '@/styles/base.less'

require('./bootstrap')

UIkit.use(Icons)
Vue.use(ElementUI)
Vue.use(iView, { locale })
Vue.use(VueRouter)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach(route => {
  iView.LoadingBar.finish()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
