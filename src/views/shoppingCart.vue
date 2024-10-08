<template>
    <v-container class="h-100 w-100" id="cartWrapper">
        <router-link :to="{ name: 'catalogView' }">
            <v-btn class="mt-5 ml-5" id="backToCatalog">Go Back To Catalog</v-btn>
        </router-link>
        <div v-if="!this.$store.state.cart.length" class="w-100 mx-auto d-flex justify-center">
            <h1>Your Cart Is Empty...</h1>
        </div>
        <div v-else v-for="(items, index) in getCartItems" :key="index" class="w-75 mt-5 d-flex flex-wrap mx-auto"
            id="items">
            <div class="itemImage">
                <img :src="items.images[0]" id="itemImage" class="mt-3 ml-5">
            </div>
            <div class="w-75 d-flex flex-column mt-5 ml-5 justify-start align-start" id="itemsInfo">
                <h1>{{ items.title }}</h1>
                <h3 class="mt-3 ml-5">Brand: {{ items.brand }}</h3>
                <h3 class="mt-3 ml-5">Price: {{ (items.price - items.discountPercentage).toFixed(2) }}$</h3>
                <h3 class="mt-3 ml-5">{{ items.shippingInformation }}</h3>
                <div class="d-flex flex-row mt-3 ml-5">
                    <v-btn id="removeButton" @click="removeItem(index)">Remove item</v-btn>
                    <v-btn id="buyButton" @click="buying(items, index)" class="ml-3">Buy Item</v-btn>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getCartItems'
        ])
    },
    methods: {
        ...mapActions([
            'removeItem',
            'buyItem',
        ]),
        removeProduct(index) {
            this.removeItem(index)
        },
        buying(item, index) {
            this.buyItem({ product: item, index: index })
        }
    }
}
</script>

<style>
#cartWrapper {
    background: rgba(0, 0, 0, 1);
    color: white;
    position: relative;
    font-family: "Montserrat", sans-serif;
}

#itemImage {
    height: 300px;
    border: 1px solid black;
    background: rgba(58, 58, 58, 1);
}

#items {
    background: rgba(35, 35, 35, 1);
    border: 2px solid rgba(214, 212, 213, 0.63);
    position: relative;
    display: flex;
    flex-wrap: wrap;
}

#buyButton,
#removeButton {
    background: gray;
    position: relative;
}

#backToCatalog {
    color: white;
    background: gray;
}
</style>
