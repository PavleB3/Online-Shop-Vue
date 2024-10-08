<template>
<<<<<<< HEAD
  <v-app>
    <v-main>
      <navBar />
      <div class="cartInfo mr-1">
        <router-link :to="{ name: 'shoppingCart' }" id="cartLink">
          <h2 class="itemsCart">Items in Cart: {{ cartItemCount }}<i class="fas fa-shopping-cart ml-2"></i></h2>
        </router-link>
      </div>
      <router-view />
=======
  <v-app id="app">
    <navBar/>
    <v-main>
      <router-view/>
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
    </v-main>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import { mapGetters } from 'vuex';
import navBar from './components/navBar.vue'
export default {
  components: {
    navBar
  },
  computed: {
    ...mapGetters([
      'cartItemCount'
    ])
  }
}
</script>

<style>
.cartInfo {
  width: 200px;
  background: transparent;
  backdrop-filter: blur(10px);
  position: absolute;
  right: 0;
  top: 60px;
  z-index: 1000;
  font-family: "Montserrat", sans-serif;
}

#cartLink {
  color: white;
  text-decoration: none;
}
=======
import navBar from './components/navBar.vue'
  export default{
    components:{
      navBar
    }
  }
</script>
<style>
  #app {
    background: rgba(249, 243, 246, 0.8);
  }
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
</style>