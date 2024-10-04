<template>
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
            'fetchProducts'
        ])
    },
    mounted() {
        this.fetchProducts()
    }
}
</script>
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
</style>