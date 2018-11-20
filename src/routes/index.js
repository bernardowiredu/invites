import app from '@/routes/app'
import sidelinks from '@/routes/app/sidebarlinks'

let routeFiles = []

// routFiles hold routes from our app and web
const routes = routeFiles.concat(
  app, sidelinks
)
export default routes
