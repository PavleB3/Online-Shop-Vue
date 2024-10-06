import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalogView from '../views/catalogView.vue'
import productDetails from '../views/productDetails.vue'
import shoppingCart from '../views/shoppingCart.vue'
import checkoutView from '../views/checkoutView.vue'
import logIn from '../views/logIn.vue'
import accRecovery from '../views/accRecovery.vue'
import createAcc from '../views/createAcc.vue'

const routes = [
  {
    path: '/',
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
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
