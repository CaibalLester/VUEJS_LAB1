import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import SignupPage from '../views/signup.vue'
import SigninPage from '../views/signin.vue'
import ManagePage from '../views/manage.vue'

import Home from '../Home.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupPage
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninPage
  },
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
