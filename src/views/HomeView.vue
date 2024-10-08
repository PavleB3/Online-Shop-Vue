<template>
<<<<<<< HEAD
  <div class="h-100 w-100" id="homeWrapper">
    <h1>Welcome to Home Page</h1>
  </div>
</template>

<script>

</script>

<style scoped>
#homeWrapper {
  background: rgba(0, 0, 0, 1);
  color: white;
}
</style>
=======
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
>>>>>>> 8fce77217d0ae855b284f28f471faf0b020e3a97
