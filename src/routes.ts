import { RouteRecordRaw } from "vue-router"

import IndexView from './views/index.vue'
import MenuView from './views/menu.vue'
import PizzaView from './views/pizza.vue'
import ContactView from './views/contact.vue'

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
]

export default routes