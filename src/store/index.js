import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
<<<<<<< HEAD
    cart: [],
    loginData: { email: "", password: "" },
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    signUpData: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      month: "",
      day: "",
      year: "",
      gender: "",
    },
    selectedProduct: null
  },
  getters: {
    getFetchedProducts: state => state.products,
    getCartItems: state => state.cart,
    cartItemCount: state => state.cart.length,
    getSignUpData: state => state.signUpData,
    getSelectedProduct: state => state.selectedProduct
=======
    selectedProduct: [],
    cart: [],
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    signUpData: {
            name: "",
            surname: "",
            email: "",
            password: "",
            mobileNumber: "",
            day: "",
            month: "",
            year: "",
            gender: "",
    }
  },
  getters: {
    getFetchedProducts: state => state.products,
    getSelectedProduct: state => state.selectedProduct,
    getCartItem: state => state.cart,
    cartItemCount: state => state.cart.length,
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
  },
  mutations: {
    setFetchedProducts(state, products) {
      state.products = products
    },
<<<<<<< HEAD
    setCart(state, product) {
      state.cart.push(product)
    },
    setEmail(state, email) {
      state.email = email
    },
    setPassword(state, password) {
      state.password = password
    },
    setSignUpData(state, data) {
      state.signUpData = data
    },
    setSelectedProduct(state, product){
      state.selectedProduct = product
=======
    setSelectedProdcut(state, selectedProduct) {
      state.selectedProduct = selectedProduct
    },
    setCart(state, product) {
      state.cart.push(product)
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      axios.get(`https://dummyjson.com/products`)
<<<<<<< HEAD
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
    buyItem: async ({ state }, { product, index } ) => {
      if (confirm("Are You sure You want to buy this product ?")) {
        await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
=======
      .then(response => {
        const fetchedProducts = response.data.products
        commit('setFetchedProducts', fetchedProducts)
        console.log(fetchedProducts)
      })
    },
    fetchProductById: async ({commit}, productId) => {
       axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        commit('setSelectedProdcut', response.data)
        console.log(response.data)
      })
    },
    addToCart: ({commit}, product) => {
      commit('setCart', product)
    },
    removeItemFromCart: ({state}, index) => {
      state.cart.splice(index, 1);
    },
    buyItem: async ({state}, {product, index}) => {
      if(confirm("Are you sure u want to buy this product ?")) {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
          item: product.title,
          brand: product.brand,
          price: product.price + "$",
        })
<<<<<<< HEAD
          .then(response => console.log(response))
        alert("Item Bought!")
        state.cart.splice(index, 1)
      }
    },
    logIn: async ({ state }) => {
      await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
        email: state.loginData.email,
        password: state.loginData.password,
      })
        .then(response => console.log(response))
    },
    signUp: async ({ state }) => {
      await axios.post(`https://jsonplaceholder.typicode.com/posts`, state.signUpData)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    },
    fetchProductId: async ({ commit }, productId) =>{
      await axios.get(`https://dummyjson.com/products/${productId}`)
      .then(response => {
        commit('setSelectedProduct', response.data)
      })
=======
        .then(response => console.log(response))
        alert("Item Bought!")
        state.cart.splice(index, 1)
      }
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
    }
  },
  modules: {
  }
})
