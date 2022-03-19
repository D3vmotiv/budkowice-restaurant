import { ViteSSG } from 'vite-ssg'
import routes from './routes'
import App from './App.vue'
import './tailwind.css'

import baseComponents from './components/base'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    Object
      .keys(baseComponents)
      .forEach((baseName: string) => {
        app.component(baseName, baseComponents[baseName])
      })
  },
)