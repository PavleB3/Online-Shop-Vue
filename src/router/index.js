import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalogView from '../views/catalogView.vue'
import productDetails from '../views/productDetails.vue'
import shoppingCart from '../views/shoppingCart.vue'
<<<<<<< HEAD
import loginForm from '../views/loginForm.vue'
=======
import checkoutView from '../views/checkoutView.vue'
import logIn from '../views/logIn.vue'
import accRecovery from '../views/accRecovery.vue'
import createAcc from '../views/createAcc.vue'
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97

const routes = [
  {
    path: '/',
<<<<<<< HEAD
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
=======
    name: 'Home',
    component: HomeView
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: catalogView
  },
  {
    path: '/details/:id?',
    name: 'Details',
    component: productDetails
  },
  {
    path: '/cart',
    name: 'Cart',
    component: shoppingCart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkoutView
  },
  {
    path: '/login',
    name: 'login',
    component: logIn
  },
  {
    path: '/recovery',
    name: 'recovery',
    component: accRecovery
  },
  {
    path: '/createAccount',
    name: 'createAccount',
    component: createAcc
  },
  
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
