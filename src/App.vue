<template>
  <v-app>
    <v-main>
      <navBar />
      <div class="cartInfo mr-1">
        <router-link :to="{ name: 'shoppingCart' }" id="cartLink">
          <h2 class="itemsCart">Items in Cart: {{ cartItemCount }}<i class="fas fa-shopping-cart ml-2"></i></h2>
        </router-link>
      </div>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
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
</style>