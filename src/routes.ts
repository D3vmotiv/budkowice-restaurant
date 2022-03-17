import { RouteRecordRaw } from "vue-router"

import IndexView from './views/index.vue'

const routes: RouteRecordRaw[] = [
    {
        name: 'index',
        path: '/',
        component: IndexView,
    }
]

export default routes