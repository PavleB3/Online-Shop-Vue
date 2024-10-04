import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    selectedProduct: [],
    cart: [],
  },
  getters: {
    getFetchedProducts: state => state.products,
    getSelectedProduct: state => state.selectedProduct,
    getCartItem: state => state.cart
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
