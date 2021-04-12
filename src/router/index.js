import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Follows from '../views/Follows'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/follows',
        name: 'Follows',
        component: Follows
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router