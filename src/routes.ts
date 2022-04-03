import { RouteRecordRaw } from "vue-router"

import IndexView from './views/index.vue'
import MenuView from './views/menu.vue'

const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: IndexView,
    },
    {
        name: 'menu',
        path: '/menu',
        component: MenuView,
    },
]

export default routes