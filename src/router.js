
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(VueRouter)

//  creating and exporting a new router object

const router = new VueRouter(
  {
    mode: 'history',
    history: true,
    base: '/',
    routes,

    scrollBehaviour (to, from, savePosition) {
      if (savePosition) {
        return savePosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
)

export default router
