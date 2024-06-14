import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: [],
    loginData: { email: "", password: "" }
  },
  getters: {
    getFetchedProducts: state => state.products,
    getCartItems: state => state.cart,
    cartItemCount: state => state.cart.length
  },
  mutations: {
    setFetchedProducts(state, products) {
      state.products = products
    },
    setCart(state, product) {
      state.cart.push(product)
    },
    setEmail(state, email) {
      state.email = email
    },
    setPassword(state, password) {
      state.password = password
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      axios.get(`https://dummyjson.com/products`)
        .then(response => {
          const fetchedProducts = response.data.products
          commit('setFetchedProducts', fetchedProducts)
        })
    },
    addToCart: ({ commit }, product) => {
      commit('setCart', product)
    },
    removeItem: ({ state }, index) => {
      if (confirm("Do You want to remove this item ?")) {
        state.cart.splice(index, 1)
      }
    },
    buyItem: async (product) => {
      if (confirm("Are You sure You want to buy this product ?")) {
        await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
          userId: product.title,
          title: product.brand,
          body: product.price,
        })
          .then(response => console.log(response))
        alert("Item Bought!")
      }
    },
    logIn: async ({ state }) => {
      await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        userId: state.loginData.email,
        title: state.loginData.password,
        body: "nesto"
      })
        .then(response => console.log(response))
    }
  },
  modules: {
  }
})
