import { ViteSSG } from 'vite-ssg'
import routes from './routes'
import App from './App.vue'
import './tailwind.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
  },
)