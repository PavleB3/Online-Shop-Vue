<template>
  <v-container>
<<<<<<< HEAD
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Vuetify 3 Beta
        </h1>


        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >Discord Community</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          What's next?
        </h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Important Links
        </h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-5">
          Ecosystem
        </h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
=======
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
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
<<<<<<< HEAD

export default {
  name: 'HelloWorld',

  data: () => ({
    ecosystem: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader/tree/next',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify/tree/next',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
    importantLinks: [
      {
        text: 'Chat',
        href: 'https://community.vuetifyjs.com',
      },
      {
        text: 'Made with Vuetify',
        href: 'https://madewithvuejs.com/vuetify',
      },
      {
        text: 'Twitter',
        href: 'https://twitter.com/vuetifyjs',
      },
      {
        text: 'Articles',
        href: 'https://medium.com/vuetify',
      },
    ],
    whatsNext: [
      {
        text: 'Explore components',
        href: 'https://vuetifyjs.com',
      },
      {
        text: 'Roadmap',
        href: 'https://vuetifyjs.com/introduction/roadmap/',
      },
      {
        text: 'Frequently Asked Questions',
        href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
      },
    ],
  }),
}
</script>
=======
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
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
