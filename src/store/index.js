import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
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
  },
  mutations: {
    setFetchedProducts(state, products) {
      state.products = products
    },
    setSelectedProdcut(state, selectedProduct) {
      state.selectedProduct = selectedProduct
    },
    setCart(state, product) {
      state.cart.push(product)
    }
  },
  actions: {
    fetchProducts: async ({ commit }) => {
      axios.get(`https://dummyjson.com/products`)
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
          item: product.title,
          brand: product.brand,
          price: product.price + "$",
        })
        .then(response => console.log(response))
        alert("Item Bought!")
        state.cart.splice(index, 1)
      }
    }
  },
  modules: {
  }
})
