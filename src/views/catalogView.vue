<template>
<<<<<<< HEAD
    <div class="mx-auto" id="divProducts">
        <h1 class="ml-5" color="white">Catalog</h1>
        <v-container>
            <v-row>
                <v-col v-for="product in getFetchedProducts" :key="product" col="12" sm="6" md="4" lg="3">
                    <v-card class="mx-auto rounded-lg" max-width="344" id="itemCard">
                        <router-link :to="{ name: 'productDetails', params: { id: product.id } }">
                            <v-img height="200px" :src="product.images[0]" cover color="rgba(50, 48, 49, 1)">
                                <template v-slot:placeholder>
                                    <div class="d-flex align-center justify-center fill-height">
                                        <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                                    </div>
                                </template>
                            </v-img>
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
=======
    <v-container>
        <v-row>
            <v-col v-for="(item, index) in getFetchedProducts" :key="index" cols="12" sm="6" md="4" lg="3">
                <v-card class="mx-auto card" max-width="400">
                    <router-link :to="{ name: 'Details', params: { id: item.id }}" id="link">
                    <v-img class="align-end text-white" height="200"
                        :src= item.images[0] cover>
                    </v-img>

                    <v-card-subtitle class="pt-4">
                        <span>{{ item.title }}</span>
                    </v-card-subtitle>

                    <v-card-text>
                        <span id="desc">{{ item.description }}</span>
                    </v-card-text>
                </router-link>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
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
<<<<<<< HEAD
            'fetchProducts',
            'addToCart'
=======
            'fetchProducts'
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
        ])
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>
<<<<<<< HEAD

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
=======
<style scoped>
    span{
        color:rgba(205, 27, 244, 0.8);
        font-size:17px;
    }
    #link {
        text-decoration: none;
    }
    #desc {
        color:black;
    }
    .card {
        border: 1px solid rgba(205, 27, 244, 0.8);
        transition: transform 0.2s ease-in-out;
        height:360px;
    }
    .card:hover {
        transform: scale(1.05);
        border: 3px solid rgba(205, 27, 244, 0.8);
    }
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
</style>