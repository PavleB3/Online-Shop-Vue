<template>
  <v-container>
    <v-row>
      <v-col cols="12">
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
                  <v-btn class="button mt-3" @click="addItem()">Add to Cart</v-btn>
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
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  methods: {
    ...mapActions([
      'fetchProductById',
      'addToCart'
    ]),
    addItem() {
      this.addToCart(this.getSelectedProduct)
      alert("U added to cart!")
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
  width: 35%;
  color: rgba(205, 27, 244, 0.8);
}

.title {
  color: rgba(205, 27, 244, 0.8);
}
.cart {
  color: rgba(205, 27, 244, 0.8);
  font-size: 25px;
}
</style>