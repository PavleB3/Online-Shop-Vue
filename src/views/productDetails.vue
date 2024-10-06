<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8">
        <div id="product" class="rounded-lg position-relative">
          <v-row>
            <v-col cols="12" md="6" lg="3" id="yourProduct">
              <h1 class="ml-10 mt-3 title">{{ getSelectedProduct.title }}</h1>
              <v-img :src="getSelectedProduct.thumbnail" max-width="350" class="ml-3"></v-img>
            </v-col>
            <v-col cols="12" md="6" lg="9">
              <div id="productDetail" class="d-flex flex-column mt-10">
                <span class="productDescription">{{ getSelectedProduct.description }}</span>
                <span class="mt-4"><span class="bold">Brand:</span> {{ getSelectedProduct.brand }}</span>
              </div>
              <div id="inStock" class="position-relative right-0 top-0 mt-3 d-flex flex-column">
                <span class="mb-3"><span class="bold">Category:</span> {{ getSelectedProduct.category }}</span>
                <span class="mb-3"><span class="bold">Warranty:</span> {{ getSelectedProduct.warrantyInformation
                  }}</span>
                <span class="mb-3"><span class="bold">Price:</span> {{ getSelectedProduct.price }}$</span>
                <div id="cart" class="d-flex flex-row align-center">
                  <div class="text-center ma-2">
                    <v-btn @click="addItem()" class="button mt-3">
                      Add to Cart
                    </v-btn>
                    <v-snackbar v-model="snackbar" id="snackBar">
                      {{ text }}
                      <template v-slot:actions>
                        <v-btn color="pink" variant="text" @click="snackbar = false">
                          Close
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </div>
                  <i class="fa-solid fa-cart-shopping cart mt-3 ml-3"></i>
                </div>
              </div>
              <span v-if="getSelectedProduct.stock > 0" class="position-absolute bottom-0 right-0 mr-3 mb-3 bold"> In
                stock</span>
              <span v-else class="position-absolute bottom-0 right-0 mr-3 mb-3 bold">Not in stock</span>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" lg="4" v-if="getSelectedProduct.reviews && getSelectedProduct.reviews.length > 0">
        <h1>Reviews</h1>
        <div id="reviews" class="rounded-lg pa-4 mb-2">
          <div class="d-flex align-start flex-column">
            <div>
              <i class="fa-solid fa-user mr-2 userr"></i>
              <span id="user">{{ getSelectedProduct.reviews[0].reviewerName }}</span>
            </div>
            <div class="d-flex justify-space-between w-100">
              <span class="ml-3">{{ getSelectedProduct.reviews[0].comment }}</span>
              <span>{{ getSelectedProduct.reviews[0].date }}</span>
            </div>
          </div>
        </div>
        <div id="reviews" class="rounded-lg pa-4 mb-2">
          <div class="d-flex align-start flex-column">
            <div>
              <i class="fa-solid fa-user mr-2 userr"></i>
              <span id="user">{{ getSelectedProduct.reviews[1].reviewerName }}</span>
            </div>
            <div class="d-flex justify-space-between w-100">
              <span class="ml-3">{{ getSelectedProduct.reviews[1].comment }}</span>
              <span>{{ getSelectedProduct.reviews[1].date }}</span>
            </div>
          </div>
        </div>
        <div id="reviews" class="rounded-lg pa-4 mb-2">
          <div class="d-flex align-start flex-column">
            <div>
              <i class="fa-solid fa-user mr-2 userr"></i>
              <span id="user">{{ getSelectedProduct.reviews[2].reviewerName }}</span>
            </div>
            <div class="d-flex justify-space-between w-100">
              <span class="ml-3">{{ getSelectedProduct.reviews[2].comment }}</span>
              <span>{{ getSelectedProduct.reviews[2].date }}</span>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" lg="2">
        <div class="discount" v-show="showPopUp">
          <h1 id="dc">
            Log in to get Discount! 
          </h1>
          <v-btn class="mt-3 w-50 rounded-sm logInBtn" @click="popUp()">log in</v-btn>
          <button class="position-absolute top-0 right-0 mr-2 mt-1" @click="showPopUp = false">X</button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      snackbar: false,
      text: 'Item added to Cart!',
      showPopUp: true,
    }
  },
  methods: {
    ...mapActions([
      'fetchProductById',
      'addToCart'
    ]),
    addItem() {
      this.addToCart(this.getSelectedProduct);
      this.snackbar = true;
    },
    popUp() {
      this.$router.push('/login')
    }
  },
  computed: {
    ...mapGetters([
      'getSelectedProduct',
      'getCartItem',
    ])
  },
  mounted() {
    this.fetchProductById(this.$route.params.id);
  }
}
</script>

<style scoped>
#product {
  color: black;
  border: 3px solid rgba(205, 27, 244, 0.8);
  background: rgba(205, 27, 244, 0.1);
}

.productDescription {
  font-size: 20px;
}

.bold {
  color: rgba(205, 27, 244, 0.8);
}

span {
  font-size: 18px;
}

.button {
  color: rgba(205, 27, 244, 0.8);
}

.title {
  color: rgba(205, 27, 244, 0.8);
}

.cart {
  color: rgba(205, 27, 244, 0.8);
  font-size: 25px;
}

#reviews {
  background: rgba(205, 27, 244, 0.1);
  border: 3px solid rgba(205, 27, 244, 0.8);
}

h1 {
  color: rgba(205, 27, 244, 0.8);
  font-weight: lighter;
}

.userr {
  color: rgba(205, 27, 244, 0.8);
  font-size: 20px;
}

#user {
  font-weight: 500;
}
.discount {
  position: fixed;
  bottom: -180px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: rgba(205, 27, 244, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  animation: slideUp 2s ease-in-out 1s forwards;
}

@keyframes slideUp {
  0% {
    bottom: -180px;
  }
  100% {
    bottom: 0; 
  }
}
#dc {
  color:white;
}
.logInBtn {
 color: rgba(205, 27, 244, 0.8);
}
</style>