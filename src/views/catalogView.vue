<template>
    <div class="h-100 w-100 mx-auto" id="divProducts">
        <h1 class="ml-5" color="white">Catalog</h1>
        <v-container>
            <v-row class="h-100">
                <v-col v-for="product in getFetchedProducts" :key="product" col="12" sm="6" md="4" lg="3">
                    <v-card class="mx-auto rounded-lg" max-width="344" id="itemCard">
                        <router-link :to="{ name: 'productDetails', params: { id: product.id } }">
                            <v-img height="200px" :src="product.images[0]" cover color="rgba(50, 48, 49, 1)"></v-img>
                        </router-link>

                        <v-card-title>
                            {{ product.title }} <br> {{ product.price }}$
                        </v-card-title>

                        <v-card-subtitle>
                            {{ product.description }}
                        </v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'getFetchedProducts'
        ])
    },
    methods: {
        ...mapActions([
            'fetchProducts',
            'addToCart'
        ])
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>

<style>
#divProducts {
    background: rgba(0, 0, 0, 1);
    color: white;
    font-family: "Montserrat", sans-serif;
}

#itemCard {
    transition: transform 0.2s ease-in-out;
    height: 350px;
}

#itemCard:hover {
    transform: scale(1.05);
}
</style>