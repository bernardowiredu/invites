import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

// registering routes
export default [

  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/about',
    component: About,
    name: 'about'
  }

]
