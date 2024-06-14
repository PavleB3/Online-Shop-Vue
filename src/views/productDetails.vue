<template>
    <div class="w-xl-100 w-lg-75 w-md-50 w-sm-25 mx-auto d-flex flex-column justify-center align-center"
        id="productDetails" v-if="product">
        <h1 class="my-5">{{ product.title }}</h1>
        <div class="productFinal">
            <div class="w-75 mx-auto d-flex flex-start">
                <img :src="product.images[0]" class="rounded-lg" id="image">
                <div class="ml-5 d-flex flex-column flex-start" id="aboutShopping">
                    <h3 class="mt-5 ml-3">{{ product.description }}</h3>
                    <h3 class="mt-5 ml-3"> <b>Warranty</b>: {{ product.warrantyInformation }}</h3>
                    <h3 class="mt-5 ml-3"><b>Shipping</b>: {{ product.shippingInformation }}</h3>
                    <h3 class="mt-5 ml-3"><b>Availability</b>: {{ product.availabilityStatus }}</h3>
                    <pre
                        class="mt-3"><h3> <i class="fas fa-star" style="color: #FFD43B;"></i> Rating: {{ product.rating }}</h3></pre>
                    <pre
                        class="mt-3 ml-3"><h3><i class="fas fa-tag mr-2"></i>Your Discount is: {{ product.discountPercentage }}$</h3></pre>
                    <h2 class="ml-3" id="finalPrice">Your final price is: {{ (product.price -
                        product.discountPercentage).toFixed(2) }}$</h2>
                    <v-btn id="cartButton" class=" w-25" @click="itemAdd">Add to Cart<i
                            class="fas fa-shopping-cart ml-2"></i></v-btn>
                </div>
            </div>
        </div>
        <div class="w-75 mx-auto mt-5 d-flex flex-row justify-space-between">
            <h2><b>Category</b>: {{ product.category }}</h2>
            <h2><b>Price:</b> {{ product.price }}$</h2>
            <h2><b>In Stock:</b> {{ product.stock }}</h2>
        </div>
        <div class="w-50 mx-auto mt-10 d-flex justify-start flex-column mb-3" id="reviews">
            <h2 class="ml-3 mb-5">Reviews:</h2>
            <div class="d-flex flex-row align-center">
                <i class="far fa-user ml-3 mr-2 mb-2" id="user"></i>
                <h3>{{ product.reviews[0].reviewerName }}:</h3>
                <p class="ml-3">{{ product.reviews[0].comment }}</p>
            </div>
            <p class="ml-3 mb-2"><b>Rating</b>: {{ product.reviews[0].rating }}/5</p>
            <div class="d-flex flex-row align-center">
                <i class="far fa-envelope ml-3" id="mail"></i>
                <p class="ml-3">{{ product.reviews[0].reviewerEmail }}</p>
            </div>
            <div id="date" class="w-100 d-flex justify-end">
                <p class="ml-3">{{ product.reviews[0].date }}</p>
            </div>
            <hr>
            <div class="d-flex flex-row align-center">
                <i class="far fa-user ml-3 mr-2 mb-2 mt-3" id="user"></i>
                <h3>{{ product.reviews[1].reviewerName }}:</h3>
                <p class="ml-3">{{ product.reviews[1].comment }}</p>
            </div>
            <p class="ml-3 mb-2"><b>Rating</b>: {{ product.reviews[1].rating }}/5</p>
            <div class="d-flex flex-row align-center">
                <i class="far fa-envelope ml-3" id="mail"></i>
                <p class="ml-3">{{ product.reviews[1].reviewerEmail }}</p>
            </div>
            <div id="date" class="w-100 d-flex justify-end">
                <p class="ml-3">{{ product.reviews[1].date }}</p>
            </div>
            <hr>
            <div class="d-flex flex-row align-center">
                <i class="far fa-user ml-3 mr-2 mb-2 mt-3" id="user"></i>
                <h3>{{ product.reviews[2].reviewerName }}:</h3>
                <p class="ml-3">{{ product.reviews[2].comment }}</p>
            </div>
            <p class="ml-3 mb-2"><b>Rating</b>: {{ product.reviews[2].rating }}/5</p>
            <div class="d-flex flex-row align-center">
                <i class="far fa-envelope ml-3" id="mail"></i>
                <p class="ml-3">{{ product.reviews[2].reviewerEmail }}</p>
            </div>
            <div id="date" class="w-100 d-flex justify-end">
                <p class="ml-3">{{ product.reviews[2].date }}</p>
            </div>
        </div>
        <div class="cartMessage d-flex justify-center align-center" v-if="showMessage">
            <p>{{ message }} </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            product: null,
            showMessage: false,
            message: "Your item has been added to the cart!"
        }
    },
    async mounted() {
        await axios.get(`https://dummyjson.com/products/${this.$route.params.id}`)
            .then(response => {
                this.product = response.data
            })
    },
    methods: {
        ...mapActions([
            'addToCart'
        ]),
        itemAdd() {
            this.addToCart(this.product)
            this.showMessage = true;
            setTimeout(() => {
                this.showMessage = false;
            }, 3000);
        }
    },
    computed: {
        ...mapGetters([
            'getCartItems'
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

#image {
    background: rgba(97, 94, 95, 1);
    width: 500px;
    height: 500px;
}

#cartButton {
    background: gray;
    position: absolute;
    bottom: 0;
    right: 10px;
    margin-bottom: 10px;
    color: white;
}

#aboutShopping {
    position: relative;

    h3 {
        font-weight: 200
    }
}

.productFinal {
    background: rgba(13, 12, 12, 1);
    border-radius: 5px;
    border: 1px solid gray;
    height: 550px;
    width: 1450px;
    display: flex;
    align-items: center;
}

#finalPrice {
    position: absolute;
    bottom: 10px;
}

h2 {
    font-weight: lighter;
}

#user {
    font-size: 30px;
}

#reviews {
    background: rgba(39, 39, 39, 1);
    color: white;
    text-align: start;
    border: 1px solid rgba(139, 137, 138, 1);
}

#mail {
    font-size: 25px;
}

.cartMessage {
    height: 120px;
    width: 280px;
    background: rgba(39, 39, 39, 1);
    border: 1px solid rgba(139, 137, 138, 1);
    border-radius: 5px;
    color: white;
    position: fixed;
    top: 10px;
}
</style>
