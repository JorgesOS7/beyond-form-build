import type { RouteConfig } from "vue-router"
import IndexPage from "./index.vue"


export const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'index-page',
        component: IndexPage,
    },
    {
        path: '/preview-register',
        name: 'preview-register-page',
        component: () => import('./preview-register.vue')
    }
]