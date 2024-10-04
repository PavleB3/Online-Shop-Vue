<template>
  <v-app id="app">
    <navBar/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import navBar from './components/navBar.vue'
  export default{
    components:{
      navBar
    }
  }
</script>
<style>
  #app {
    background: rgba(249, 243, 246, 0.8);
  }
</style>