<template>
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