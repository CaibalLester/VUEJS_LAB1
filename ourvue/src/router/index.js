import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LogInPage from '../views/logIn.vue'
import AboutPage from '../views/aboutUs.vue'
import shop_info from '../views/shop_info.vue'
import ManagePage from '../views/manage.vue'
import Home from '../Home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: LogInPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/shop_info',
    name: 'shop_info',
    component: shop_info
  }
  ,
  {
    path: '/manage',
    name: 'manage',
    component: ManagePage
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkExactActiveClass: "active",
  routes
})




export default router
