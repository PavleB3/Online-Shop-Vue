<template>
<<<<<<< HEAD
  <v-card>
    <v-tabs v-model="tab" bg-color="black" id="header1" class="d-flex align-center">
      <router-link :to="{ name: 'home' }" class="catalogLink ml-5">
        <div class="catalogDiv">Home</div>
      </router-link>
      <v-spacer></v-spacer>
      <div v-for="link in links" :key="link.name">
        <router-link :to="{ name: link.name }" class="catalogLink">
          <div class="catalogDiv">{{ link.label }}</div>
        </router-link>
      </div>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: 'catalogView', label: 'Catalog' },
        { name: 'shoppingCart', label: 'Cart' },
        { name: 'loginForm', label: 'Log in' }
      ]
    };
  },
};
</script>

<style lang="scss">
#header1 {
  background: rgba(8, 7, 7, 0.99);
  height: 60px;
  color: white;
  border-bottom: 2px solid rgba(214, 212, 213, 0.63);
}

.catalogLink {
  font-size: 30px;
  text-decoration: none;
  color: white;
}

.catalogDiv {
  width: 150px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
}

.catalogDiv:hover {
  color: white;
  background: rgba(106, 101, 103, 0.63);
}
</style>
=======
    <v-container id="navBarLinks" fluid>
        <v-row justify="center" align="center" v-if="isDesktop">
            <v-col v-for="(link, index) in routerLinks" :key="index" cols="auto">
                <router-link :to="{ name: link.name }" class="text-center linkClass">
                    {{ link.label }}
                </router-link>
            </v-col>
            <div class="d-flex">
                <router-link :to="{ name: 'Cart' }" class="linkClass">Cart</router-link>
                <div id="cartNumber" class="d-flex justify-center align-center mt-1" v-if="cartItemCount >= 1">{{ cartItemCount }}</div>
            </div>
        </v-row>
        <v-row justify="center" align="center" v-if="isMobile">
            <v-col cols="auto" class="mb-5">
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props" class="position-absolute right-0 mr-2">
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="(link, index) in routerLinks" :key="index" :value="index" class="lista">
                            <v-list-item-title>
                                <router-link :to="{ name: link.name }" class="mobileLinkClass">
                                    {{ link.label }}
                                </router-link>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            routerLinks: [
                { name: "Home", label: "Home" },
                { name: "Catalog", label: "Catalog" },
            ],
            isMobileMenuVisible: false,
            isDesktop: false,
            isMobile: false,
        }
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuVisible = !this.isMobileMenuVisible;
        },
        checkScreenSize() {
            const width = window.innerWidth;
            this.isDesktop = width >= 600;
            this.isMobile = width < 600;
        }
    },
    computed: {
        ...mapGetters([
            'cartItemCount'
        ])
    }
}
</script>

<style scoped>
#navBarLinks {
    background: white;
}

.linkClass {
    position: relative;
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    color: black;
}

.linkClass::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: rgba(205, 27, 244, 0.8);
    transition: width 0.4s ease, left 0.4s ease;
}

.linkClass:hover::after {
    width: 100%;
    left: 0;
}

.mobileLinkClass {
    text-decoration: none;
    color: black;
}

#cartNumber {
    height: 15px;
    width: 15px;
    padding:5px;
    border-radius: 50%;
    background: rgba(205, 27, 244, 0.8);
    color: white;
}
</style>
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
