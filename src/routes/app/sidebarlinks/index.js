import Contacts from '@/views/app/pages/Contacts/Contacts.vue'
import Dashboard from '@/views/app/pages/Dashboard/Dashboard.vue'
import Events from '@/views/app/pages/Events/Event.vue'
import Groups from '@/views/app/pages/Groups.vue'
import Payments from '@/views/app/pages/Payments.vue'
import Reports from '@/views/app/pages/Reports.vue'
import Settings from '@/views/app/pages/Settings.vue'

export default [
  {
    path: '/',
    component: Dashboard,
    name: 'Dashboard',
    icon: 'md-home'
  },
  {
    path: '/events',
    component: Events,
    name: 'Events',
    icon: 'md-calendar'
  },
  {
    path: '/contacts',
    component: Contacts,
    name: 'Contacts',
    icon: 'md-contact'
  },
  {
    path: '/groups',
    component: Groups,
    name: 'Groups',
    icon: 'md-people'
  },
  {
    path: '/reports',
    component: Reports,
    name: 'Reports',
    icon: 'md-pulse'
  },
  {
    path: '/payments',
    component: Payments,
    name: 'Payments',
    icon: 'md-card'
  },
  {
    path: '/settings',
    component: Settings,
    name: 'Settings',
    icon: 'md-settings'
  }
]
