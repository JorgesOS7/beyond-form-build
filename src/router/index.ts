import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../pages/index.vue'
import { routes } from '@/pages'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes
})


export default router
