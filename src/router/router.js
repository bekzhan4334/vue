import { createRouter, createWebHistory } from "vue-router"
import HomePage from '@/pages/HomePage'
import AddBookPage from '@/pages/AddBookPage'
import BookDetailPage from '@/pages/BookDetailPage'
import EditBookPage from '@/pages/EditBookPage'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/add',
        component: AddBookPage
    },
    {
        path: '/edit/:id',
        component: EditBookPage
    },
    {
        path: '/book/:id',
        component: BookDetailPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router