<template>
<<<<<<< HEAD
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
=======
    <router-link to="/catalog">
        <v-btn class="ml-3 backToCatalog">Catalog</v-btn>
    </router-link>
    <v-container>
        <v-row>
            <v-col cols="12" v-if="this.$store.state.cart.length">
                <v-row>
                    <v-col cols="12" sm="6" md="10" lg="12" v-for="(item, index) in getCartItem" :key="index"
                        id="cartItems" class="mb-2 mt-10">
                        <h1>{{ item.title }}</h1>
                        <v-img :src="item.thumbnail" max-width="250" id="productPhoto"></v-img>
                        <v-col cols="12" md="6" lg="12" id="price" class="d-flex flex-row justify-space-between">
                            <span>Price With Discount: {{ (item.price % item.discountPercentage).toFixed(2) }}$</span>
                            <div>
                                <router-link to="/checkout">
                                    <v-btn class="button">Buy</v-btn>
                                </router-link>
                                <v-btn class="ml-5 button" @click="removeItemFromCart(index)">Remove</v-btn>
                            </div>
                        </v-col>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" v-else class="mt-10">
                <h1>No products in the Cart...</h1>
            </v-col>
        </v-row>
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
    </v-container>
</template>

<script>
<<<<<<< HEAD
import { mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getCartItems'
=======
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'getCartItem',

>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
        ])
    },
    methods: {
        ...mapActions([
<<<<<<< HEAD
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
=======
            'removeItemFromCart',
        ]),
        removeItem(index) {
            this.removeItemFromCart(index)
        },
    }
}
</script>
<style scoped>
h1 {
    font-weight: lighter;
}

#cartItems {
    color: black;
    border: 3px solid rgba(205, 27, 244, 0.8);
    background: rgba(205, 27, 244, 0.1);
    height: 400px;
}

#productPhoto {
    border: 1px solid black;
}

.backToCatalog {
    position: fixed;
    z-index: 1000;
    color: rgba(205, 27, 244, 0.8);
}
.button { 
    color: rgba(205, 27, 244, 0.8);
}
</style>
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
