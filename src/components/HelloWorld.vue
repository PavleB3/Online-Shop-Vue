<template>
  <v-container>
    <v-row id="row">
      <v-col cols="12" id="col" class="d-flex flex-column align-center">
        <h1 id="welcome" class="mb-3">Welcome to the Online Shop</h1>
        <div id="slider-wrapper">
          <div id="slider-content">
            <div class="mr-3" v-for="(item, index) in getFetchedProducts" :key="index">
              <v-card class="mx-auto" width="200">
                <v-img :src="item.thumbnail" height="100" cover></v-img>
                <v-card-subtitle class="pt-4">
                  {{ item.title }}
                </v-card-subtitle>
              </v-card>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
h1 {
  font-weight: lighter;
  color: rgba(205, 27, 244, 0.8);
}

#slider-wrapper {
  overflow: hidden;
  width: 100%;
}

#slider-content {
  display: inline-flex;
  animation: scroll 60s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
