<template>
    <v-row class="h-100" id="productDetails" v-if="getSelectedProduct">
        <v-col cols="12" sm="10" md="8" class="h-auto mx-auto productDetailBox productBox">
            <v-col cols="12" lg="12" md="6" class="d-flex flex-row">
                <v-img :src="getSelectedProduct.thumbnail" class="w-25 h-25 mt-10 productImage rounded-lg"></v-img>
                <div class="ml-5">
                    <h1>{{ getSelectedProduct.title }}</h1>
                    <p id="description" class="mt-2">{{ getSelectedProduct.description }}</p>
                    <hr>
                    <p class="mt-3" id="itemDesc"><span id="boldText">Price:</span> {{ getSelectedProduct.price }}$</p>
                    <p class="mt-3" id="itemDesc"><span id="boldText">Brand:</span> {{ getSelectedProduct.brand }}</p>
                    <p class="mt-3" id="itemDesc"><span id="boldText">Category:</span> {{ getSelectedProduct.category }}
                    </p>
                    <p class="mt-3" id="itemDesc"><span id="boldText">Return Policy:</span> {{
                        getSelectedProduct.returnPolicy }}</p>
                    <p class="mt-5" id="itemDesc">- {{ getSelectedProduct.shippingInformation }}</p>
                    <div class="w-100 d-flex justify-end">
                        <v-btn class="bg-grey-darken-2" @click="itemAdd()">Add To Cart</v-btn>
                    </div>
                </div>
            </v-col>
            <hr>
            <v-col cols="12" sm="10" md="8" lg="12">
                <div class="w-100">
                    <div class="mx-auto w-75 d-flex justify-center">
                        <h2 class="mb-5">Reviews:</h2>
                    </div>
                    <div class="w-75 mx-auto">
                        <div id="user1" class="d-flex flex-row align-center">
                            <i class="far fa-user mr-5" id="user"></i>
                            <h3>{{ getSelectedProduct.reviews[0].reviewerName }}:</h3>
                            <p class="ml-3">{{ getSelectedProduct.reviews[0].comment }}</p>
                        </div>
                        <div id="user1" class="d-flex flex-row align-center mt-3">
                            <i class="far fa-user mr-5" id="user"></i>
                            <h3>{{ getSelectedProduct.reviews[1].reviewerName }}:</h3>
                            <p class="ml-3">{{ getSelectedProduct.reviews[1].comment }}</p>
                        </div>
                        <div id="user1" class="d-flex flex-row align-center mt-3">
                            <i class="far fa-user mr-5" id="user"></i>
                            <h3>{{ getSelectedProduct.reviews[2].reviewerName }}:</h3>
                            <p class="ml-3">{{ getSelectedProduct.reviews[2].comment }}</p>
                        </div>

                    </div>
                </div>
            </v-col>
        </v-col>
    </v-row>
</template>



<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            showMessage: false,
            message: "Your item has been added to the cart!",
        }
    },
    async mounted() {
        await this.fetchProductId(this.$route.params.id)
    },
    methods: {
        ...mapActions([
            'addToCart',
            'fetchProductId'
        ]),
        itemAdd() {
            this.addToCart(this.getSelectedProduct)
            this.showMessage = true;
            setTimeout(() => {
                this.showMessage = false;
            }, 3000);
        }
    },
    computed: {
        ...mapGetters([
            'getCartItems',
            'getSelectedProduct'
        ])
    }
}
</script>
<style lang="scss">
#productDetails {
    background: rgba(0, 0, 0, 1);
    color: white;
    font-family: "Montserrat", sans-serif;
}

#description {
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
}

#boldText {
    font-weight: bold;
}

#itemDesc {
    font-size: 22px;
}

.productBox {
    height: 450px;
    border: 1px solid gray;
    border-bottom: none;
}

.productImage {
    background: rgba(58, 58, 58, 1);
}

h2 {
    font-weight: lighter;
}
</style>