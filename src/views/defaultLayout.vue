<template>
    <div class="cartInfo mr-1">
        <router-link :to="{ name: 'shoppingCart' }" id="cartLink">
            <h2>Items in Cart: {{ cartItemCount }}<i class="fas fa-shopping-cart ml-2"></i></h2>
        </router-link>
    </div>
    <routerView />
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {

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
    top: 120px;
    z-index: 1000;
    font-family: "Montserrat", sans-serif;
}

#cartLink {
    color: white;
    text-decoration: none;
}
</style>