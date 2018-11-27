// import app from '@/routes/app'
import sidelinks from '@/routes/app/sidebarlinks'
import events from '@/routes/app/events'
let routeFiles = []

// routFiles hold routes from our app and web
const routes = routeFiles.concat(
  sidelinks, events
)
export default routes
