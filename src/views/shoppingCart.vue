<template>
    <router-link to="/catalog">
        <v-btn class="mb-3 mt-3 ml-3">Catalog</v-btn>
    </router-link>
    <v-container>
        <v-row>
            <v-col cols="12" v-if="this.$store.state.cart.length">
                <v-row>
                    <v-col cols="12" sm="6" md="10" lg="12" v-for="(item, index) in getCartItem" :key="index"
                        id="cartItems" class="mb-2">
                        <h1>{{ item.title }}</h1>
                        <v-img :src="item.thumbnail" max-width="250" id="productPhoto"></v-img>
                        <v-col cols="12" md="6" lg="12" id="price" class="d-flex flex-row justify-space-between">
                            <span>Price With Discount: {{ (item.price%item.discountPercentage).toFixed(2) }}$</span>
                            <div>
                                <v-btn @click="buying(item, index)">Buy</v-btn>
                                <v-btn class="ml-5" @click="removeItemFromCart(index)">Remove</v-btn>
                            </div>
                        </v-col>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" v-else>
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
            'buyItem'
        ]),
        removeItem(index) {
            this.removeItemFromCart(index)
        },
        buying(item, index){
            this.buyItem({product: item, index: index})
        }
    },
    mounted() {
        console.log(this.getCartItem)
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

</style>