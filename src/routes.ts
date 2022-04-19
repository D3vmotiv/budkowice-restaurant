import { RouteRecordRaw } from "vue-router"

import IndexView from './views/index.vue'
import MenuView from './views/menu.vue'
import PizzaView from './views/pizza.vue'
import ContactView from './views/contact.vue'
import Error404View from './views/error-404.vue'

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
    {
        name: 'pizza',
        path: '/pizza',
        component: PizzaView,
    },
    {
        name: 'contact',
        path: '/kontakt',
        component: ContactView,
    },
    {
        name: 'error-404',
        path: '/404',
        component: Error404View,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: { name: 'error-404' },
    },
]

export default routes