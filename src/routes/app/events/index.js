import Events from '@/views/app/pages/Events.vue'
import Event from '@/views/app/pages/Events/Event.vue'

export default [
  {
    path: '/events',
    component: Events,
    children: [

      {
        path: '',
        component: Event,
        name: 'event'
      }
    ]
  }
]
