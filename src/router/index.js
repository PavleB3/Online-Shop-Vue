import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import catalogView from '../views/catalogView.vue'
import productDetails from '../views/productDetails.vue'
import shoppingCart from '../views/shoppingCart.vue'

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
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
