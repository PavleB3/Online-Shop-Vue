<template>
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
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'getCartItem',

        ])
    },
    methods: {
        ...mapActions([
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