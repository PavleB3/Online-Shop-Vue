import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalogView from '../views/catalogView.vue'
import productDetails from '../views/productDetails.vue'
import shoppingCart from '../views/shoppingCart.vue'
import loginForm from '../views/loginForm.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/catalog',
    name: 'catalogView',
    component: catalogView,
  },
  {
    path: '/productDetails/:id?',
    name: 'productDetails',
    component: productDetails,
  },
  {
    path: '/cart',
    name: 'shoppingCart',
    component: shoppingCart,
  },
  {
    path: '/login',
    name: 'loginForm',
    component: loginForm
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
